import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getSearch } from "../../../utilities/searches-services"
import { searchSpotify } from "../../../utilities/results-services"
import ResultsCardShow from "../../../components/Results/ResultsCardShow"

export default function SearchesShow() {
    const { id } = useParams()
    const [search, setSearch] = useState(null)
    const [results, setResults] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const handleRequest = async () => {
        try {
            const searchData = await getSearch(id)
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
                <h1 className="mb-3">Search Results for <span className="fw-bold text-emphasis-dark">{search.input}</span></h1>
                <div className="row">
                    {results.map((result, idx) => {
                        return <ResultsCardShow result={result} key={idx} />
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