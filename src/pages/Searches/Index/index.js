import { useState, useEffect } from "react"
import { getSearches, createSearch } from '../../../utilities/searches-services'
import ResultsCard from "../../../components/Results/ResultsCard"
import SearchForm from "../../../components/SearchForm/SearchForm"
import TestUser from "../../../components/Auth/TestUser"
import { useAuth0 } from "@auth0/auth0-react"

export default function SearchesIndex() {
    const [searches, setSearches] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
        // eslint-disable-next-line
    }, [isLoading])

    const loaded = () => {
        return (
            <div className="row">
                {searches?.map(search => {
                    return (
                        <ResultsCard search={search} key={search._id} />
                    )
                })}
            </div>
        )
    }

    return (
        <section>
            <SearchForm setIsLoading={setIsLoading}/>
            <TestUser />
            <h1 className="mb-3">Welcome to SearchCast!</h1>
            {isLoading ? <p>Loading</p> : loaded()}
        </section>
    )
}