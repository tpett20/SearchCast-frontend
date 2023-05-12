import { deleteSearch } from "../../utilities/searches-services"
import { useParams, useNavigate } from "react-router"

export default function DeleteButton() {
    const {id} = useParams()
    console.log(id)
    const navigate = useNavigate()

    async function handleDeleteSearch() {
        try {
            const delResponse = await deleteSearch(id)

            if (delResponse._id) {
                navigate('/')
            } else {
                throw new Error('Delete Search Error')
            }
        } catch (err) {
            console.log(err)
            navigate(`/searches/${id}`)
        }
    }

    return (
        <button onClick={() => handleDeleteSearch(id)} className="btn ms-5">
            🚫
        </button>
    )
}