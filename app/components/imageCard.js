'use client';
import React, { useState, useEffect } from "react";
import fetchImages from "../lib/fetchImages";
import {closestCenter, DndContext,  KeyboardSensor, PointerSensor, useSensor, useSensors} from '@dnd-kit/core';
import {SortableContext,  useSortable, arrayMove} from '@dnd-kit/sortable';
import ImgContainer from "./imgContainer";
import { CSS } from "@dnd-kit/utilities";

export default function Home({topic}) {
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

 

  const url = !topic ? 'https://api.pexels.com/v1/curated' : `https://api.pexels.com/v1/search?query=${topic}`;

  useEffect(() => {
    async function fetchAndSetImages() {
      const images = await fetchImages(url);
      if (images && images.photos) {
        setPhotos(images.photos);
      }
    }

    fetchAndSetImages();
  }, []);   

  if(!photos.length > 0){
        
    return (        
        <h1 
            className="text-2xl sm:text-3xl text-center h-screen mt-10  justify-center align-center font-bold text-red-800"
        >  
            Images not found
        </h1>
     )  
}

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
    className=" ">
        <ImgContainer photo={photo} />
    </section>
   )
}


  return (
    <DndContext 
    sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}
    
    >
        <section className="grid py-10 my-8 gap-2 grid-cols-gallery">
            <SortableContext items={photos} >
            {photos.map((photo) => (           
                    <SortablePhotos   key={photo.id} photo={photo}   />          
            ))}
            </SortableContext>
        </section>
    </DndContext>
  );
}
