import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar bg-dark-subtle rounded mt-2">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand text-dark">
                    🎙️🔍 SearchCast
                </Link>
            </div>
        </nav>
    )
}