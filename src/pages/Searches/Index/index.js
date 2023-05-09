import { useState, useEffect } from "react"

export default function SearchesIndex() {
    const [searches, setSearches] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const BASE_URL = "http://localhost:4000/searches"

    const getSearches = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allSearches = await response.json()
            setSearches(allSearches)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const loaded = () => {
        return searches?.map(search => {
            return (
                <div key={search._id}>
                    <p>{search.input}</p>
                </div>
            )
        })
    }

    useEffect(() => {
        getSearches()
    }, [isLoading])

    return (
        <>
            <h1>Searches - Index</h1>
            {isLoading ? <p>Loading</p> : loaded()}
        </>
    )
}