import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const AdminNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <Link className="navbar__item navbar__home" to="/home">
                <li className="navbar__linkactive navbar__home">
                    Home
                </li>
            </Link>
            <Link className="navbar__item navbar__orders" to="/orders">
                <li className="navbar__linkactive navbar__orders">
                    Orders
                </li>
            </Link>
            <Link className="navbar__item navbar__myAccount" to="/myAccount">
                <li className="navbar__linkactive navbar__myAccount">
                    My Account
                </li>
            </Link>
            
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("mirat_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}