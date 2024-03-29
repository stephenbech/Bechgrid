"use client"
import { useState } from 'react'  
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

export default function Home() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const {push} = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const payload = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };
    
   try{
     const response = await axios.post("/api/auth/login", payload)
     console.log(response)
     alert(JSON.stringify(response.data));

     //redirect the user to gallery
     push("/gallery")
   } catch (error) {
     if (error instanceof AxiosError) {
      alert(error.message);
   }else{
    alert(error);
  }

   }
  }
   const handleTogglePassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                  Sign in to your account
                </h2>
              </div>
      
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        value="user@example.com"
                        required
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
      
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                        Password
                      </label>
                    </div>
                    <div className="mt-2 relative">
                      <input
                        id="password"
                        name="password"
                        type={showNewPassword ? 'text' : 'password'}
                        autoComplete="current-password"
                        value="1Password"
                        required
                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                      <button
                        onClick={handleTogglePassword}
                        className=" cursor-pointer absolute inset-y-0 right-0 flex text-white items-center pr-3"
                        type='button'
                      >
                        {showNewPassword ? <HiOutlineEyeOff className=" w-6 h-6" /> : <HiOutlineEye className=" w-6 h-6" />}
                      </button>
                    </div>
                  </div>
      
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
      
                
              </div>
            </div>
        </>
  )
}
