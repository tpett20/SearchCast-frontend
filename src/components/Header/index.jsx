import { Link } from "react-router-dom"
import LoginButton from "../Auth/LoginButton"
import LogoutButton from "../Auth/LogoutButton"
import './Header.css'

export default function Header() {
    return (
        <nav className="navbar bg-transparent rounded mt-2">
            <div className="container-fluid p-0">
                <Link to='/' className="navbar-brand text-dark HeaderText p-0 mt-2">
                    🎙️🔍 SearchCast
                </Link>
                <div className="d-flex">
                    <LoginButton />
                    <LogoutButton />
                </div>
            </div>
        </nav>
    )
}