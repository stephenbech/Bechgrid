// 'use client';
// import React, { useState, useEffect } from "react";
// import fetchImages from "../lib/fetchImages";
// import {closestCenter, DndContext,  KeyboardSensor, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
// import {SortableContext,  useSortable, arrayMove} from '@dnd-kit/sortable';
// import ImgContainer from "./imgContainer";
// import { CSS } from "@dnd-kit/utilities";

// export default function Home({topic = "curated", page }) {
//     const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));
//   const [photos, setPhotos] = useState([])

//   const onDragEnd = (event) => {
    
//     const { active, over } = event;
//     if (active.id === over.id) {
//         return;
//     }
//         setPhotos((photos) => {
//             const oldIndex = photos.findIndex((photo) => photo.id === active.id);
//             const newIndex = photos.findIndex((photo) => photo.id === over.id);
//             return arrayMove(photos, oldIndex, newIndex);
//         });
//   };

 

//   let url 
//     if (topic === "curated" && page ) { //browsing beyond home
//         url = `https://api.pexels.com/v1/curated?page=${page}`
//     } else if ( topic !== "curated"){ //home
//          url = 'https://api.pexels.com/v1/curated'
//     } else if (!page) { // 1st page of search results
//         url = `https://api.pexels.com/v1/search?query=${topic}`
//     } else { //  search result beyond 1st page
//         url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
//     }





//   useEffect(() => {
//     async function fetchAndSetImages() {
//       const images = await fetchImages(url);
//       if (images && images.photos) {
//         setPhotos(images.photos);
//       }
//     }

//     fetchAndSetImages();
//   }, []);   

//   if(!photos.length > 0 ){
        
//     return (        
//         <h1 
//             className="text-2xl sm:text-3xl text-center h-screen mt-10  justify-center align-center font-bold text-red-800"
//         >  
//             Images not found 
//         </h1>
//      )  
// }

//   const SortablePhotos = ({photo}) => {
//     const {
//         attributes, 
//         listeners, 
//         setNodeRef,
//         transform,
//         transition
//     } = useSortable({id: photo.id}); ;

//     const style = {
//         transition,
//         transform: CSS.Transform.toString(transform),
       
//     }
//    return (
//     <section 
//     {...attributes} 
//     {...listeners} 
//     ref={setNodeRef}
//     style={style} 
//     className=" ">
//         <ImgContainer photo={photo} />
//     </section>
//    )
// }


//   return (
//     <DndContext 
//     sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}
    
//     >
       
//             <SortableContext items={photos} >
//             <section className="px-1 my-3 grid grid-cols-gallery py-10 auto-rows-[10px]">
//             {photos.map((photo) => (           
//                     <SortablePhotos   key={photo.id} photo={photo}   />          
//             ))}
//              </section>
//             </SortableContext>
       
//     </DndContext>
//   );
// }
'use client';
import React, { useState, useEffect } from "react";
import fetchImages from "../lib/fetchImages";
import {closestCenter, DndContext,  KeyboardSensor, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import {SortableContext,  useSortable, arrayMove} from '@dnd-kit/sortable';
import ImgContainer from "./imgContainer";
import { CSS } from "@dnd-kit/utilities";
import Masonry from 'react-masonry-css';
import Footer from "./Footer";
import getPrevNextPages from "../lib/getPrevNextPages"
const breakpointColumnsObj = {
  default: 3,
  3000: 5,
  2000: 5,
  1200: 4,
  1000: 3,
  500: 2,
};

export default function Home({topic = "curated", page }) {
    const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));
  const [photos, setPhotos] = useState([])

  const onDragEnd = (event) => {
    
    const { active, over } = event;
    if (active.id === over.id) {
        return;
    }
        setPhotos((photos) => {
            const oldIndex = photos.findIndex((photo) => photo.id === active.id);
            const newIndex = photos.findIndex((photo) => photo.id === over.id);
            return arrayMove(photos, oldIndex, newIndex);
        });
  };

 

  let url 
    if (topic === "curated" && page ) { //browsing beyond home
        url = `https://api.pexels.com/v1/curated?page=${page}`
    } else if ( topic !== "curated"){ //home
         url = 'https://api.pexels.com/v1/curated'
    } else if (!page) { // 1st page of search results
        url = `https://api.pexels.com/v1/search?query=${topic}`
    } else { //  search result beyond 1st page
        url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
    }





  useEffect(() => {
    async function fetchAndSetImages() {
      const images = await fetchImages(url);
      if (images && images.photos) {
        setPhotos(images.photos);
      }
    }

    fetchAndSetImages();
  }, []);   

  if(!photos.length > 0 || photos.per_page === 0 ){
        
    return (        
        <h1 
            className="text-2xl sm:text-3xl text-center h-screen mt-10  justify-center align-center font-bold text-red-800"
        >  
            Images not found 
        </h1>
     )  
  }
  const { prevPage, nextPage } = getPrevNextPages(photos)

  const footerProps = { topic, page, nextPage, prevPage }

  const SortablePhotos = ({photo}) => {
    const {
        attributes, 
        listeners, 
        setNodeRef,
        transform,
        transition
    } = useSortable({id: photo.id}); ;

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
       
    }
   return (
    <section 
    {...attributes} 
    {...listeners} 
    ref={setNodeRef}
    style={style} 
    className="px-2 py-2 ">
        <ImgContainer photo={photo} />
    </section>
   )
}


  return (
    <>
    <DndContext 
    sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}
    
    >
       
            <SortableContext items={photos} >
            <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
            {photos.map((photo) => (           
                    <SortablePhotos   key={photo.id} photo={photo}   />          
            ))}
             </Masonry>
            </SortableContext>
       
    </DndContext>
    <Footer {...footerProps} />
    </>
  );
}
