import { CustomerNav } from "./CustomerNav"
import { AdminNav } from "./AdminNav"
import "./NavBar.css"

export const NavBar = () => {
    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)
    
    if (miratUserObject.staff){
        return <AdminNav />
    } else{
        return <CustomerNav />
    }
}
