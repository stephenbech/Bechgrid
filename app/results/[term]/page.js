import NavBar from "../../components/NavBar"
import ImageCard from "../../components/imageCard"


export function generateMetadata({params: {term} }) {
    return {
        title: `Results for ${term}`
        
    }
    // console.log(term)
}

export default function SearchResults( {params: {term} }) {
    
    return (
        <div>
            <NavBar/>
            <ImageCard topic={term} />
        </div>
    )
}