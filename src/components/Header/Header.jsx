import { Link } from "react-router-dom"
import LoginButton from "../Auth/LoginButton"
import LogoutButton from "../Auth/LogoutButton"
import './Header.css'

export default function Header() {
    return (
        <nav className="navbar bg-transparent rounded mt-1">
            <div className="container-fluid p-1">
                <Link to='/' className="navbar-brand text-dark">
                    <span className="HeaderText">🎙️🔍 SearchCast</span>
                </Link>
                <div>
                    <LoginButton />
                    <LogoutButton />
                </div>
            </div>
        </nav>
    )
}