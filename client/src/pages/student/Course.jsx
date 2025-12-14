import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
 
import React from "react";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 py-0">
      <div className="relative">
        <img
          src="https://media.geeksforgeeks.org/img-practice/prod/courses/822/Mobile/Content/nextpng_1732621657.png"
          alt="course"
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </div>
      <CardContent className=' px-5 py-3 space-y-2'>
        <h1 className="hover:underline font-bold text-lg truncate">
          {" "}
          Netxjs complete course
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 ">
            <Avatar className="h-8 w-8 ">
              <AvatarImage
                src=" https://github.com/shadcn.png"
                className="rounded-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="font-medium text-sm">praveen mernstack</h1>
          </div>
          <Badge className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full">
            Advance
          </Badge>
        </div>
        <div className="text-lg font-bold ">
         <span> ₹499</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
