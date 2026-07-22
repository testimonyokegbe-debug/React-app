import React from "react"
import { assets } from "../assets/assets"

const Footer = () => {
    return (
        <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full
        overflow-hidden" id='Footer'>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
    <img src={assets.logo} className="h-12 w-15" alt="logo" />
    <p className="text-gray-400 mt-4 text-center">
        Testimony, a computer Engineering student with a strong interest in
        software development and application.
    </p>
</div>
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
    <li><a href="#Header" className="hover:text-white">Home</a></li>
    <li><a href="#about" className="hover:text-white">About us</a></li>
    <li><a href="#contact" className="hover:text-white">Contact us</a></li>
    <li><a href="#testimonials" className="hover:text-white">Privacy policy</a></li>
</ul>
                </div>
            </div>
            <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
                Copyright 2026 © Iruoghene.
            </div>
        </div>
    )
}
export default Footer