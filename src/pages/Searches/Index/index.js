import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getSearches, createSearch } from '../../../utilities/searches-services'
import { accessSpotify } from "../../../utilities/results-services"
import ResultsCard from "../../../components/Results/ResultsCard"

export default function SearchesIndex() {
    const [searches, setSearches] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [newForm, setNewForm] = useState({input: ""})

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
                    <ResultsCard search={search}/>
                </div>
            )
        })
    }

    const handleChange = (evt) => {
        setNewForm({...newForm, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await createSearch(newForm)
            setIsLoading(true)
            setNewForm({input: ""})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section>
            <h1>Add a Search</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={newForm.input}
                    onChange={handleChange}
                    type="text"
                    name="input"
                    placeholder="Enter your search..."
                />
                <button>Add Search</button>
            </form>
            <button onClick={accessSpotify}>Access Spotify!</button>
            <h1>Searches - Index</h1>
            {isLoading ? <p>Loading</p> : loaded()}
        </section>
    )
}