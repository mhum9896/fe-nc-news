import { Link } from "react-router"

export const NavBar = () => {
    return (
        <>
        <nav>
            <Link to="/" className="navbarlinks">
            Articles
            </Link>
        </nav>
        </>
    )
}