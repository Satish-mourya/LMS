import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
const Login = () => {

    const [loginInput,SetLoginInput]=useState({email:"",password:""});
    const [signupInput,SetSignupInput]=useState({name:"",email:"",password:""});

    const changeInputHandler=(e,type)=>{
        const {name,value}=e.target;
        if(type=="signup"){
            SetSignupInput({...signupInput,[name]:value});
        }else{
            SetLoginInput({...loginInput,[name]:value});
        }
    }

    const handleRegistration=(type)=>{
        const inputType=type==="signup"?signupInput:loginInput;
        console.log(inputType);
        
    }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="account">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup" >SignUp</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>SignUp</CardTitle>
                <CardDescription>
                  create a new account and click SignUp when you are done
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input type="text" placeholder="eg.rohit" required="true" name="name" value={signupInput.name} onChange={(e)=>changeInputHandler(e,"signup")} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Email</Label>
                  <Input
                    type="email"
                    placeholder=" eg.rohit@gmail.com"
                    required="true"
                    name="email"
                    value={signupInput.email}
                    onChange={(e)=>changeInputHandler(e,"signup")}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-username">Password</Label>
                  <Input type="password" placeholder="eg.xyz" required="true"
                   name="password"
                    value={signupInput.password}
                    onChange={(e)=>changeInputHandler(e,"signup")}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={()=>handleRegistration("signup")} >SignUp</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login your password here . after signUp you'll be logged
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-current">Email</Label>
                  <Input
                    type="email"
                    placeholder="eg.rohit@gmail.com"
                    required="true"
                     name="email"
                    value={loginInput.email}
                    onChange={(e)=>changeInputHandler(e,"login")}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">password</Label>
                  <Input type="password" placeholder="eg.xyz" required="true"
                   name="password"
                    value={loginInput.password}
                    onChange={(e)=>changeInputHandler(e,"login")}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={()=>handleRegistration("login")}>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
