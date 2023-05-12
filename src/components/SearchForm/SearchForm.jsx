import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { createSearch } from "../../utilities/searches-services"

export default function SearchForm({setIsLoading}) {
    const { user, isAuthenticated } = useAuth0()
    let userId = ''
    if (isAuthenticated) {userId = user.sub}
    const [newForm, setNewForm] = useState({input: "", user: ""})

    const handleChange = (evt) => {
        setNewForm({...newForm, [evt.target.name]: evt.target.value, user: userId})
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

    return isAuthenticated ? (
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
    ) : <></>
}