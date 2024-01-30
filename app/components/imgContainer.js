// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// const ImgContainer = ({ photo }) => {
//     const widthHeightRatio = photo.height / photo.width
//     const galleryHeight = Math.ceil(250 * widthHeightRatio)
//     const photoSpans = Math.ceil(galleryHeight / 10) + 1
//   return (
//     <div className="w-[250px] justify-self-center"
//     style={{ gridRow: `span ${photoSpans}` }}
// >
//     <Link href={photo.url} target="_blank" className="grid place-content-center">
       
            
//              <div
//                 className=" bg-gray-200 rounded-xl overflow-hidden group "                  
//             >
                
//                 <Image
//                     src={photo.src.large}
//                     alt={photo.alt}
//                     width={photo.width}
//                     height={photo.height}
//                         sizes="250px"
//                     className=" hover:delay-75 
//                     group-hover:opacity-50"
//                     priority={true}
//                 />
//             </div>
      
//        </Link>
//        </div>
//   );
// };

// export default ImgContainer;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from 'react-spring';

// ...

const AnimatedImage = ({ src, alt, ...props }) => {
  const propsSpring = useSpring({
    opacity: 1,
    from: { opacity: 0.5 },
    transform: 'scale(1)',
    from: { transform: 'scale(0.8)' },
  });

  return (
    <animated.img
      src={src}
      alt={alt}
      style={propsSpring}
      className="w-full h-auto hover:delay-75 group-hover:opacity-50 transition-transform duration-300 transform hover:scale-110"
      {...props}
    />
  );
};

const ImgContainer = ({ photo }) => {
   
  return (
//     <div className="w-[250px] justify-self-center"
//     style={{ gridRow: `span ${photoSpans}` }}
// >

    // <Link href={photo.url} target="_blank" className="grd place-content-center">
       
            
             <div
                className=" bg-gray-200 rounded-xl overflow-hidden group  transition transform hover:-translate-y-1  
                ease-out hover:ease-in" 
                                 
            >
                
                <Image
                    src={photo.src.large}
                    alt={photo.alt}
                    height={100}
                    width={100}
                        sizes="250px"
                    className=" w-full h-auto hover:delay-75  group-hover:opacity-90 

                    "
                    priority={true}
                />
                {/* <AnimatedImage
                    src={photo.src.large}
                    alt={photo.alt}
                    height={100}
                    width={100}
                    sizes="250px"
                    priority={true}
                /> */}
            </div>
      
    //    </Link>
     
    //    </div>
  );
};

export default ImgContainer;