
import axios from "axios";
import { ImagesSchemaWithPhotos } from "../models/Images";

export default async function fetchImages(url) {
    
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: "Hd4DN3fv1lFOzWFXWlj9O6MqS9UU02KGaa7R17tOLMeII7W1B0mq6Taa", // Replace with your Pexels API key
              },
        })

        if (!response.ok) throw new Error("Fetch Images error!")

        const imagesResults = await response.json()

       return imagesResults;

    } catch (e) {
        // Will show in terminal console 
        if (e instanceof Error) console.log(e.stack)
        return{ error: 'Internal Server Error' };
    }
}
