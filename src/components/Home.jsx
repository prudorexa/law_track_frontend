import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/static/images/lawyer.jpg')" }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">Welcome to Our Law Track</h1>
          <div className="flex space-x-4">
            <Link to="/contact" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 text-lg sm:text-xl">Contact Us</Link>
            <Link to="/schedule" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 text-lg sm:text-xl">Schedule</Link>
          </div>
        </div>
      </div>

      <div className="home min-h-screen p-6 flex flex-col items-center justify-center mt-4">
        <section className="w-full max-w-5xl mb-12 bg-white bg-opacity-75 shadow-xl p-6 md:p-12 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-3/5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">About Our Project</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700">Our law firm is dedicated to providing top-notch legal services and representation in various fields of law. Our experienced team is committed to achieving the best outcomes for our clients.</p>
          </div>
          <div className="md:w-2/5 flex space-x-4">
            <img className="w-24 h-24 rounded-full object-cover" src="/static/images/negotiation.webp" alt="About Us" />
            <img className="w-24 h-24 rounded-full object-cover" src="/static/images/Probate and success.webp" alt="Our Services" />
            <img className="w-24 h-24 rounded-full object-cover" src="/static/images/topping.webp" alt="Contact Us" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
