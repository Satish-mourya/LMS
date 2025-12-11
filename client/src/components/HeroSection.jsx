import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          find the best courses for you{" "}
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
           
          Discover, learn & upskill with our wide range of courses
        </p>
        <form action="" className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6 ">
          <Input
            type="text"
             className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400
             dark:placeholder-gray-500"
             placeholder="Search courses"
          />
          <Button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3  rounded-r-full hover:bg-blue-700 dark:bg-blue-900"> Search</Button>
           
        </form>
        <Button className="bg-white dark:bg-gray-800 text-blue-600  rounded-full hover:bg-gray-200">Explore Courses</Button>
      </div>
    </div>
  );
};

export default HeroSection;
