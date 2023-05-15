import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Admin.css"


export const Admin = ({id, fullName, email, password}) => {
    const [admins, setAdmin] = useState([])
    const [singleAdmin, setSingleAdmin] = useState()
    
    const navigate = useNavigate()

    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)

    useEffect(
        () =>{
        fetch(`http://localhost:8088/admins?_expand=user`)
        .then(response => response.json())
        .then((adminArray) => {
            setAdmin(adminArray)
        })
        },
        []
    )

    useEffect(
        () => {
            const myAccount = admins.find((admin) => admin.userId === miratUserObject.id)
            setSingleAdmin(myAccount)
        },
        [admins]
    )

    return <>
        <h3>My Account</h3>

            <section className="info__card">
                <div>Name : {singleAdmin?.user?.fullName}</div>
                <div>Email : {singleAdmin?.user?.email}</div>
                <div>Password: {singleAdmin?.user?.password}</div>
            </section>
        <div className="updateButtonDiv">
            <button className="update__button" onClick={() => navigate(`/myAccount/${singleAdmin?.user?.id}/edit`)}>Update Account info</button>
        </div>
    </>
} 