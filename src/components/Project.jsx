import React from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [cardsToShow, setCardsToShow] = React.useState(1);

  React.useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(3);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const nextProjects = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProjects = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 font-light">
          {" "}Completed
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Explore our collection of thoughtfully designed projects, where luxury,
        comfort, and modern architecture come together to create exceptional
        places to live.
      </p>
{/*project slider buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProjects} className='p-3 bg-gray-200 rounded-full mr-2' aria-label="Previous projects">
          <img src={assets.left} alt="Previous"/>
        </button>
        <button onClick={nextProjects} className='p-3 bg-gray-200 rounded-full' aria-label="Next projects">
          <img src={assets.right} alt="Next"/>
        </button>
      </div>
      {/*project slider container */}
<div className="overflow-hidden">
  <div className="flex gap-4 transition-transform duration-500 ease-in-out" 
  style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
    {projectsData.map((project, index) => (
      <div key={index} className="relative flex-shrink-0 w-full sm:w-1/5">
        <img src={project.image} className="h-72 w-full object-cover mb-14" alt={project.title} />
        <div className="absolute bottom-5 left-0 right-0 flex justify-center">
          <div className="inline-block bg-white w-11/12 px-4 py-3 shadow-md">
            <h2 className="text-lg font-semibold text-center truncate">
              {project.title}
            </h2>
            <p className="text-gray-500 text-sm text-center flex flex-wrap justify-center gap-x-1">
              <span>{project.Location}</span>
              <span>|</span>
              <span>{project.Status}</span>
              <span>|</span>
              <span>{project.price}</span>
            </p>
          </div>
        </div>
      </div>
      ))}
    </div>
</div>
    </div>
  );
};

export default Projects;