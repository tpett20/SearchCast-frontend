import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { searchSpotify } from "../../utilities/results-services"
import { limitResults } from "../../utilities/spotifyResults"

export default function ResultsCard({search}) {
    const [results, setResults] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const handleRequest = async () => {
        try {
            // const resultsData = await searchSpotify('Joey Votto')
            const resultsData = await searchSpotify(search.input)
            const shortenedData = limitResults(resultsData)
            setResults(shortenedData)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        handleRequest()
        // eslint-disable-next-line
    }, [isLoading])

    const loaded = () => {
        return (
            <div>
                <Link to={`/searches/${search._id}`}>
                    <p>{search.input}</p>
                </Link>
                <div>
                    {results?.map((r, idx) => {
                        return (
                            <div key={idx}>
                                {/* <img src={r.images[2].url} alt={r.name}/> */}
                                <p>{r.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        isLoading ? <p>Loading</p> : loaded()
    )
}