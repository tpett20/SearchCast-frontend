import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { searchSpotify } from "../../utilities/results-services"
import { limitResults } from "../../utilities/spotifyResults"
import DeleteButton from "../DeleteButton/DeleteButton"

export default function ResultsCard({search, setIsLoading: setIndexLoading}) {
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
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card mb-3">
                    <div className="card-header bg-secondary-subtle d-flex justify-content-between">
                        <div className="d-inline-flex">
                            <Link to={`/searches/${search._id}`} className="link-offset-1 fs-5">
                                {search.input}
                            </Link>
                        </div>
                        <div className="d-inline-flex">
                            <DeleteButton id={search._id} setIndexLoading={setIndexLoading}/> 
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        {results?.map((r, idx) => {
                            return (
                                <li key={idx} className="list-group-item text-truncate">
                                    <img src={r.images[2].url} alt={r.name}/> {idx+1}. {r.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        isLoading ? <p>Loading</p> : loaded()
    )
}