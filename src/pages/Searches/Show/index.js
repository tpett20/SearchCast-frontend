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
                <p>{search.input}</p>
                <p>{search._id}</p>
                <ul>
                {results.map((r, idx)=> {
                    return (
                    <li key={idx}><span style={{fontWeight: 'bold'}}>{r.name}</span>: {r.description}</li>
                    )
                })}
                </ul>
            </>
        )
    }

    return (
        <section>
            {isLoading ? <p>Loading</p> : loaded()}
        </section>
    )
}