import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Course from "./Course";
import { useLoadUserQuery, useUpdateUserMutation } from "@/features/api/authApi";

const Profile = () => {
    const {data,isLoading}=useLoadUserQuery();
    const {updateUser,{data:updateUserData,isLoading:updateUserIsLoading,error}}=useUpdateUserMutation();
    console.log(data);
    if(isLoading) return <h1>Profile Loading...</h1>
    const {user} = data;


    // updateUser Handler
    const [name,setName]=useState("");
    const [profilePhoto,setProfilephoto]=useState("");

    const onChangeHandler=(e)=>{
      const file=e.target.files[0];
      if(file) setProfilephoto(file);
    }
    const updateUserHandler=()=>{

    }
  return (
    <div className=" max-w-7xl my-24 mx-auto px-4 ">
      <h1 className="font-bold text-2xl text-center md:text-left">Profile</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
            <AvatarImage
              src={user.photoUrl || "https://github.com/shadcn.png"}
              className="rounded-full "
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Name  :{" "}
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                {user.name}
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Email :{" "}
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                {user.email}
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Role :{" "}
              <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                {user.role.toUpperCase()}
              </span>
            </h1>
          </div>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button size="sm">Edit profile</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label>Name</Label>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label>Profile Photo</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button disabled={isLoading} onClick={updateUserHandler} >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                        wait
                      </>
                    ) : (
                      "save changes"
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
       <div>
          <h1 className=" text-center md:text-start font-medium text-lg mb-5 ">Courses you're enrolled in</h1>
          <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
                {
                     user.enrolledCourses.length===0?(
                      <h1 className="font-semibold text-gray-700">You haven't enrolled yet</h1>
                     ):(
                      user.enrolledCourses.map((course)=><Course course={course} key={course._id}/>)
                     )
                }
          </div>
        </div>
    </div>
  );
};

export default Profile;
