import { useAuth0 } from "@auth0/auth0-react"

export default function Introduction() {

    const {user, isLoading} = useAuth0()

    if (user && !isLoading) {
        return (
            <>
                <h1 className="my-3">Howdy, {user.name}!</h1>
                <h2 className="my-3">Thanks for using SearchCast!</h2>
            </>
        )
    }
    else if (!user && !isLoading) {
        return (
            <>
                <h1 className="my-3">Welcome to SearchCast!</h1>
                <p className="lead">Track podcasts based on your interests. Log in or create an account to add keyword searches that you'd like to keep an eye on.</p>
                <p></p>
                <p className="my-3">Here are a few examples to give you an idea of how SearchCast works: </p>
            </>
        )
    }
    else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}