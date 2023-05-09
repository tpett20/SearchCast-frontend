import { useState, useEffect } from "react"
import { getSearches, createSearch } from '../../../utilities/searches-services'

export default function SearchesIndex() {
    const [searches, setSearches] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [newForm, setNewForm] = useState({input: ""})

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
                    value={newForm.name}
                    onChange={handleChange}
                    type="text"
                    name="input"
                    placeholder="Enter your search..."
                />
                <button>Add Search</button>
            </form>
            <h1>Searches - Index</h1>
            {isLoading ? <p>Loading</p> : loaded()}
        </section>
    )
}