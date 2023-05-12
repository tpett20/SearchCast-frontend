import { useState, useEffect } from "react"
import { getSearches, createSearch } from '../../../utilities/searches-services'
import ResultsCard from "../../../components/Results/ResultsCard"
import TestUser from "../../../components/Auth/TestUser"

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
            <div className="col-6">
                <form onSubmit={handleSubmit} className="input-group my-3">
                    <input
                        value={newForm.input}
                        onChange={handleChange}
                        type="text"
                        name="input"
                        placeholder="Add a search!"
                        className="form-control"
                    />
                    <button className="btn btn-outline-secondary">Add</button>
                </form>
            </div>
            <TestUser />
            <h1 className="mb-3">Welcome to SearchCast!</h1>
            {isLoading ? <p>Loading</p> : loaded()}
        </section>
    )
}