import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <h1>SearchCast</h1>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
            </ul>
        </header>
    )
}