import { useState, useEffect } from "react"
import { getSearches } from '../../../utilities/searches-services'
import ResultsCard from "../../../components/Results/ResultsCard"
import ResultsCardLoad from "../../../components/Results/ResultsCardLoad"
import SearchForm from "../../../components/SearchForm/SearchForm"
import Introduction from "../../../components/Introduction/Introduction"
import { useAuth0 } from "@auth0/auth0-react"

export default function SearchesIndex() {
    
    const [searches, setSearches] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { user, isAuthenticated, isLoading: auth0Loading } = useAuth0()

    async function handleRequest() {
        try {
            const apiResponse = await getSearches()
            if (isAuthenticated) {
                const filteredSearches = apiResponse.filter(s => s.user === user.sub)
                setSearches(filteredSearches)
                setIsLoading(false)
            } else {
                const filteredSearches = apiResponse.filter(s => s.user === process.env.REACT_APP_AUTH0_ADMIN_ID)
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

    const loading = () => {
        return (
            <div className="row">
                <ResultsCardLoad/>
                <ResultsCardLoad/>
                <ResultsCardLoad/>
            </div>
            )
    }

    return (
        <section>
            <Introduction/>
            <SearchForm setIsLoading={setIsLoading}/>
            {isLoading ? loading() : loaded()}
        </section>
    )
}