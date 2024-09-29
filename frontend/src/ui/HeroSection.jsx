import React from 'react';
import HeroImage from "../assets/images/herosection.webp"
const HeroSection = () => {
  return (
    <div
      className="h-[75vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${HeroImage})`, // Replace with your background image URL
      }}
    >
     <div className="bg-white bg-opacity-60 backdrop-blur-lg p-8 text-center text-black rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Discover the latest trends and exclusive offers.
        </p>
        <a
          href="#shop"
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md text-lg transition-all duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
