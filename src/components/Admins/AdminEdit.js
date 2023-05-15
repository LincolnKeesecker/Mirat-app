import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./Admin.css"

export const AdminEdit = () => {
    const {adminId} = useParams()
    const [adminInfo, updateAdmin] = useState()

    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)

    const navigate = useNavigate()

    useEffect(
        () =>{
        fetch(`http://localhost:8088/users/${adminId}`)
        .then(response => response.json())
        .then((data) => {
            updateAdmin(data)
        })
    },[adminId])

    const handleSavebuttonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/users/${adminId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(adminInfo)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/myAccount")
            })
    }

    return <>
    <h3>Update Current Account Info</h3>
    <form className="admin">
    <fieldset>
        <div>
            <div className="form-group">
                <label htmlFor="fullName">Name: </label>
                <input
                required
                type="input"
                value={adminId.fullName}
                placeholder={adminInfo?.fullName}
                onChange={
                    (evt) => {
                        const copy = { ...adminInfo }
                        copy.fullName = evt.target.value
                        updateAdmin(copy)
                    }
                } />
            </div>
        </div>
    </fieldset>
    <fieldset>
        <div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                required
                type="input"
                value={adminId.email}
                placeholder={adminInfo?.email}
                onChange={
                    (evt) => {
                        const copy = { ...adminInfo }
                        copy.email = evt.target.value
                        updateAdmin(copy)
                    }
                } />
            </div>
        </div>
    </fieldset>
    <fieldset>
        <div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input
                required
                type="input"
                value={adminId.password}
                placeholder={adminInfo?.password}
                onChange={
                    (evt) => {
                        const copy = { ...adminInfo }
                        copy.password = evt.target.value
                        updateAdmin(copy)
                    }
                } />
            </div>
        </div>
    </fieldset>
    <button
        onClick={(clickEvent) => handleSavebuttonClick(clickEvent)}
        className="btn_btn-primary">
            Save Updated Info
    </button>
</ form>
</>
}