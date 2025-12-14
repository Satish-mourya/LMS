import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import Course from "./Course";

const MyLearnig = () => {
  const  course= [1,2,3,4,5,6,7,8];
  
  return (
    <div className="max-w-7xl mx-auto my-24 px-4 md:px-0 ">
      <h1 className="font-bold text-2xl">My Learning</h1>
      <div className="my-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.length===0
          ?[1,2,3,4].map((_, index) => <CourseSkeleton key={index} />)
          : course.map((index)=><Course key={index}/>)}
        </div>
      </div>
    </div>
  );
};

export default MyLearnig;

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover: shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};
