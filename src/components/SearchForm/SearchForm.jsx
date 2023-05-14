import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { createSearch } from "../../utilities/searches-services"

export default function SearchForm({ setIsLoading }) {
    const { user, isAuthenticated, isLoading } = useAuth0()
    
    const [newForm, setNewForm] = useState({ input: "", user: "" })

    const handleChange = (evt) => {
        setNewForm({ ...newForm, [evt.target.name]: evt.target.value, user: user.sub })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await createSearch(newForm)
            setIsLoading(true)
            setNewForm({ input: "" })
        } catch (err) {
            console.log(err)
        }
    }

    return isAuthenticated && !isLoading ? (
        <div className="col-6">
            <form onSubmit={handleSubmit} className="input-group my-3">
                <input
                    value={newForm.input}
                    onChange={handleChange}
                    type="text"
                    name="input"
                    placeholder="Add a search!"
                    className="form-control fs-5"
                />
                <button className="btn btn-success">Add</button>
            </form>
        </div>
    ) : <></>
}