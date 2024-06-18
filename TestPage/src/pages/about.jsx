import React from "react";
import Navbar from "../components/Navbar";
import keyfigimg from "../components/assets/Groupaboutus34452.svg";
import { IoPersonOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="bg-[#1FBA4A] text-white text-center h-[400px] pt-36">
        <p className="font-bold text-3xl">About Us</p>
        <p className="pt-4">Now operating across Nigeria</p>
      </div>
      <div>
        <p className="pt-48 flex justify-center text-green-500 text-3xl font-bold">
          Key Figures
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={keyfigimg}
          className="lg:max-w-[1000px] md:max-w-[1000px] sm:max-w-[320px] h-[800px]"
        />
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col sm:space-y-8 lg:space-y-0 md:space-y-0 p-3 px-32 w-full items-center justify-between font-semibold pt-24">
        <div className="bg-[#1FBA4A] text-white  text-2xl shadow-2xl border text-center pointer:cursor rounded-lg p-5 w-80">
          <p>Our Vision</p>
        </div>
        <div className="text-2xl shadow-2xl border text-center pointer:cursor rounded-lg p-5 w-80">
          <p>Our Mission</p>
        </div>
        <div className="text-2xl shadow-2xl border text-center pointer:cursor rounded-lg p-5 w-80">
          <p>Our Values</p>
        </div>
      </div>
      <div>
        <p className="pt-48 pb-48 flex justify-center text-green-500 text-3xl font-bold">
          Executive Team
        </p>
      </div>
      <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col sm:space-y-5 lg:space-y-0 lg:space-x-10 sm:space-x-0 md:space-x-0 md:space-y-0 pb-5">
        <div className="flex flex-col text-center items-center">
          <IoPersonOutline className="w-10 h-10 mb-3" />
          <p className="text-xl">John Philip</p>
          <p>Group Managing Director</p>
        </div>
        <div className="flex flex-col text-center items-center">
          <IoPersonOutline className="w-10 h-10 mb-3" />
          <p className="text-xl">John Philip</p>
          <p>Group Managing Director</p>
        </div>
        <div className="flex flex-col text-center items-center">
          <IoPersonOutline className="w-10 h-10 mb-3" />
          <p className="text-xl">John Philip</p>
          <p>Group Managing Director</p>
        </div>
      </div>
    </div>
  );
};

export default About;
