import React from 'react'

const SignupForm = () => {
  return (
    <div className="bg-white px-10 py-20 lg:py-10 rounded-3xl border-2 border-gray-200 mx-2">
    <h1 className="text-5xl font-semibold">Welcome Back</h1>
    <p className="font-medium text-lg text-gray-500 mt-4">
      Welcome back! Please enter your details.
    </p>
    <div className="md:mt-2">
    <div>
        <label htmlFor="text" className="text-lg font-medium">
          Username
        </label>
        <input
          type="text"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          id="text"
          placeholder="Enter Your Username"
        />
      </div>
      <div className='mt-2'>
        <label htmlFor="email" className="text-lg font-medium">
          Email
        </label>
        <input
          type="email"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          id="email"
          placeholder="Enter Your Email"
        />
      </div>
      <div className='mt-2'>
        <label htmlFor="password" className="text-lg font-medium">Password</label>
        <input
          type="password"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          id="password"
          placeholder="Enter Your Password"
        />
      </div>
      <div className='mt-2'>
        <label htmlFor="conpassword" className="text-lg font-medium">Confirm Password</label>
        <input
          type="password"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          id="conpassword"
          placeholder="Please Confirm Your Password"
        />
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="ml-2 font-medium text-base">
            Remember Me
          </label>
        </div>
        <button onClick={() => (window.location.href = "/")} className="font-medium text-base bg-violet-500 text-white p-2 rounded-xl  active:scale-[0.98] transition-all active:duration-100 hover:scale-[1.01] ease-in-out">
          Sign In
        </button>
      </div>
      <div className="flex items-center justify-between my-8">
        <hr className="border-1 border-gray-400 w-full" />
        <span className="px-2 text-gray-500">Note</span>
        <hr className="border-1 border-gray-400 w-full" />
      </div>
      <div>
        <span>
          By Logging In, <p>you agree to <span className="text-violet-500 cursor-pointer">www.sidakvats.in</span> Privacy Policy and Terms Of Use</p>
        </span>
      </div>
      <div className="mt-8 flex flex-col gap-y-4">
        <button className="bg-violet-500 text-white text-lg font-bold py-3 rounded-xl active:scale-[0.98] transition-all active:duration-100 hover:scale-[1.01] ease-in-out ">
          Sign Up
        </button>       
      </div>      
    </div>
  </div>
  )
}

export default SignupForm
