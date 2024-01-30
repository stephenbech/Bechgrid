import NavBar from "../../components/NavBar"
import ImageCard from "../../components/imageCard"


export function generateMetadata({params: {myParams} }) {

    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"

    return {
        title: `Results for ${topic} - Page ${page}`
        
    }
    // console.log(term)
}

export default function SearchResults( {params: {myParams} }) {

    const topic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"
    
    return (
        <div>
            <NavBar/>
            <ImageCard topic={topic} page={page} />
        </div>
    )
}