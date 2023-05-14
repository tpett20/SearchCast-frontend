import { deleteSearch } from "../../utilities/searches-services"
import { useNavigate } from "react-router"
import { useAuth0 } from "@auth0/auth0-react"
import './DeleteButton.css'

export default function DeleteButton({ id, setIndexLoading }) {

    const { isAuthenticated, isLoading } = useAuth0()
    const navigate = useNavigate()

    async function handleDeleteSearch() {
        try {
            const delResponse = await deleteSearch(id)

            if (delResponse._id) {
                setIndexLoading(true)
                navigate('/')
            } else {
                throw new Error('Delete Search Error')
            }
        } catch (err) {
            console.log(err)
            navigate(`/`)
        }
    }

    return !isLoading && isAuthenticated ? (
        <button onClick={() => handleDeleteSearch(id)} className="btn p-0 DeleteButton">
            ❌
        </button>
    ) : <></>
}