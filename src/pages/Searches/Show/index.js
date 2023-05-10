import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getSearch } from "../../../utilities/searches-services"
import { searchSpotify } from "../../../utilities/results-services"

export default function SearchesShow() {
    const { id } = useParams()
    const [search, setSearch] = useState(null)
    const [results, setResults] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const handleRequest = async () => {
        try {
            const searchData = await getSearch(id)
            // const resultsData = await searchSpotify('Joey+Votto')
            const resultsData = await searchSpotify(searchData.input)
            setSearch(searchData)
            setResults(resultsData)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [])

    const loaded = () => {
        return (
            <>
                <h2>{search.input}, {search._id}</h2>
                {results.map((r, idx)=> {
                    return (
                    <div key={idx}>
                        <img src={r.images[2].url} alt={r.name}/>
                        <p>{r.release_date} <span style={{fontWeight: 'bold'}}>{r.name}</span></p>
                        <p><a href={r.external_urls.spotify} target="_blank" rel="noopener noreferrer">Listen on Spotify</a></p>
                    </div>
                    )
                })}
            </>
        )
    }

    return (
        <section>
            {isLoading ? <p>Loading</p> : loaded()}
        </section>
    )
}