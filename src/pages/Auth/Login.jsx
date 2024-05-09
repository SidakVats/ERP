import React from "react";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    
    <div className="bg-[#f1f1f1] flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 ">
        <LoginForm/>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-blue-200 rounded-full animate-bounce shadow-2xl"/>
        <div className="w-full absolute h-[38%] bg-white/10 backdrop-blur-3xl bottom-0"/>
      </div>
    </div>
  );
};

export default Login;
