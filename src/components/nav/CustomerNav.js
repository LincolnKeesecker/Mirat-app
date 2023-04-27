import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <Link className="navbar__item" to="/home">
                <li className="navbar__linkactive">
                    Home
                </li>
            </Link>
            <Link className="navbar__item" to="/orders">
                <li className="navbar__linkactive">
                    Orders
                </li>
            </Link>
            <Link className="navbar__item" to="/myAccount">
                <li className="navbar__linkactive">
                    My Account
                </li>
            </Link>

            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("mirat_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    )
}