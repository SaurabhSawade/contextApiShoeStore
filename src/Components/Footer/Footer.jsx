import React from "react";
function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Company Info */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Your Company</h2>
              <p className="text-gray-400">© 2024 All rights reserved.</p>
            </div>
  
            {/* Navigation Links */}
            <div className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
            </div>
  
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#facebook" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;