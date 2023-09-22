import React from "react";
import Image from "next/image";
const ImgContainer = ({ photo }) => {
  
  return (

        <div className="grid place-content-center">
            
             <div
                className=" h-64 w-40 sm:w-80 bg-gray-200 rounded-xl overflow-hidden relative group "                  
            >
                
                <Image
                    src={photo.src.large}
                    alt={photo.alt}
                    fill={true}
                    sizes="(250px)"
                    className="object-cover abso hover:delay-75 
                    group-hover:opacity-50"
                    priority={true}
                />
            </div>
       </div>
  );
};

export default ImgContainer;