import React from "react";
import Logo from "../img/logo-brand.png";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl">
          <img className="p-5" src={Logo} alt="brand" />
          <h1 className="text-5xl font-bold text-center text-gray-800">
            Welcome to <span className="text-blue-500">Room</span> Booking
          </h1>
          <p className="mt-5 text-xl text-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div className="flex flex-col items-center justify-center w-full mt-10 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
            <a
              href="/rooms"
              className="px-8 py-3 text-xl font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700"
            >
              Book Now
            </a>
            <a
              href="#/"
              className="px-8 py-3 text-xl font-semibold text-blue-500 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
