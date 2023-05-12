import { Link } from "react-router-dom"
import LoginButton from "../Auth/LoginButton"
import LogoutButton from "../Auth/LogoutButton"

export default function Header() {
    return (
        <>
        <nav className="navbar bg-dark-subtle rounded mt-2">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand text-dark">
                    🎙️🔍 SearchCast
                </Link>
                <div className="d-flex">
                    <LoginButton />
                    <LogoutButton />
                </div>
            </div>
        </nav>
        </>
    )
}