import { useState, useEffect } from "react"
import { getSearches, createSearch } from '../../../utilities/searches-services'
import ResultsCard from "../../../components/Results/ResultsCard"
import SearchForm from "../../../components/SearchForm/SearchForm"
import { useAuth0 } from "@auth0/auth0-react"

export default function SearchesIndex() {
    
    const [searches, setSearches] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { user, isAuthenticated, isLoading: auth0Loading } = useAuth0()

    async function handleRequest() {
        try {
            const apiResponse = await getSearches()
            if (user) {
                const filteredSearches = apiResponse.filter(s => s.user === user.sub)
                setSearches(filteredSearches)
                setIsLoading(false)
            } else {
                const filteredSearches = apiResponse.filter(s => s.user === undefined)
                setSearches(filteredSearches)
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleRequest()
        // eslint-disable-next-line
    }, [isLoading, auth0Loading])

    const loaded = () => {
        return (
            <div className="row">
                {searches?.map(search => {
                    return (
                        <ResultsCard search={search} key={search._id} setIsLoading={setIsLoading} />
                    )
                })}
            </div>
        )
    }

    return (
        <section>
            <SearchForm setIsLoading={setIsLoading}/>
            <h1 className="mb-3">Welcome to SearchCast!</h1>
            {isLoading ? <p>Loading</p> : loaded()}
        </section>
    )
}