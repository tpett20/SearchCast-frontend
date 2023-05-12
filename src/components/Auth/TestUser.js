import { useAuth0 } from "@auth0/auth0-react"

export default function TestUser() {
    const { user, isAuthenticated, isLoading } = useAuth0()

    console.log(user)

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.picture}</p>
                <img src={user.picture}/>
            </div>
        )
    );
}