import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getSearch } from "../../../utilities/searches-services"

export default function SearchesShow() {
    const { id } = useParams()
    const [search, setSearch] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const handleRequest = async () => {
        try {
            const searchData = await getSearch(id)
            setSearch(searchData)
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
            </>
        )
    }

    return (
        <section>
            {isLoading ? <p>Loading</p> : loaded()}
        </section>
    )
}