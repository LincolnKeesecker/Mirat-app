import { AdminViews } from "./AdminViews"
import { CustomerViews } from "./CustomerViews"

export const ApplicationViews = () => {
	
    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)
    
    if (miratUserObject.staff){
        return <AdminViews />
    } else{
        return <CustomerViews />
    }

}