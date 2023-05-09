import { useState, useEffect } from "react"
import { getSearches } from '../../../utilities/searches-service'

export default function SearchesIndex() {
    const [searches, setSearches] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const BASE_URL = "http://localhost:4000/searches"

    async function handleRequest() {
        try {
            const apiResponse = await getSearches()
            setSearches(apiResponse)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [isLoading])

    const loaded = () => {
        return searches?.map(search => {
            return (
                <div key={search._id}>
                    <p>{search.input}</p>
                </div>
            )
        })
    }

    return (
        <>
            <h1>Searches - Index</h1>
            {isLoading ? <p>Loading</p> : loaded()}
        </>
    )
}