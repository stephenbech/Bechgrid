"use client"
import {useState, useEffect } from "react"
import NavBar from "../../components/NavBar"
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { Circles} from 'react-loader-spinner';
export const revalidate = 10
export default function ResultPageLayout({children}) {
      const [isSuccess, setisSuccess] = useState(false)
      const {push} = useRouter();
      
      
      useEffect(() => {
            (async () => {
                  const {user, error} = await getUser();
                  if (error){
                        push('/')
                        return;
                  }
                  console.log(user)

                  

                  // if the error did not happen, everything is alright
                  setisSuccess(true);
            })();
      }, [push])

      
     

      if(!isSuccess){
            return (
                  <div className="flex justify-center text-gray-900 items-center  h-screen">
                        <Circles
                        height="80"
                        width="80"
                        color="#fff"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                  />
                  </div>
            )
      }

      

      return (
            <div> 
                  
                 <main className=" ">
                 {children}
                 </main>
            </div>
      )
      
}



async function getUser() {
      try{
            const {data} = await axios.get('/api/auth/me');
            return{
                  user: data,
                  error: null,
            }
      }catch (e){
            const error = e.response && e.response.status !== 200;
            return{
                  user: null,
                  error,
            };
      }
}