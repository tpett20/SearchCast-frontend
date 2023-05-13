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
            // const resultsData = await searchSpotify('Joey Votto')
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
        // eslint-disable-next-line
    }, [])

    const loaded = () => {
        return (
            <>
                <h1 className="my-3">Search Results for <span className="fw-bold text-emphasis-dark">{search.input}</span></h1>
                <div className="row">
                {results.map((r, idx)=> {
                    return (
                    <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                        <div className="card h-100">
                            <img src={r.images[1].url} alt={r.name} className="card-img-top"/>
                            <div className="card-body d-flex flex-column justify-content-start">
                                <h5 className="card-title overflow-auto text-center" style={{height:"75px"}}>
                                    {r.name}
                                </h5>
                                <p className="card-text overflow-auto border rounded" style={{height:"100px"}}>{r.description}</p>
                                <div className="d-flex justify-content-center">
                                    <a href={r.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="btn btn-success">Listen on Spotify</a>
                                </div>
                            </div>
                            <div className="card-footer">
                                Release Date: {r.release_date}
                            </div>
                        </div>
                    </div>
                    )
                })}
                </div>
            </>
        )
    }

    return (
        <section>
            {isLoading ? <p>Loading</p> : loaded()}
        </section>
    )
}