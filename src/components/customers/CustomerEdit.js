import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const CustomerEdit = () => {
    const {customerId} = useParams()
    const [customerInfo, updateCustomer] = useState()

    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)

    const navigate = useNavigate()

    useEffect(
        () =>{
        fetch(`http://localhost:8088/users/${customerId}`)
        .then(response => response.json())
        .then((data) => {
            updateCustomer(data)
        })
    },[customerId])

    const handleSavebuttonClick = (event) => {
        event.preventDefault()

        return fetch(`http://localhost:8088/users/${customerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerInfo)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/myAccount")
            })
    }


    return <form className="customer">
        <h3>Update Current Account Info</h3>
        <fieldset>
            <div>
                <div className="form-group">
                    <label htmlFor="fullName">Name: </label>
                    <input
                    required
                    type="input"
                    value={customerId.fullName}
                    placeholder={customerInfo?.fullName}
                    onChange={
                        (evt) => {
                            const copy = { ...customerInfo }
                            copy.fullName = evt.target.value
                            updateCustomer(copy)
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
                    value={customerId.email}
                    placeholder={customerInfo?.email}
                    onChange={
                        (evt) => {
                            const copy = { ...customerInfo }
                            copy.email = evt.target.value
                            updateCustomer(copy)
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
                    value={customerId.password}
                    placeholder={customerInfo?.password}
                    onChange={
                        (evt) => {
                            const copy = { ...customerInfo }
                            copy.password = evt.target.value
                            updateCustomer(copy)
                        }
                    } />
                </div>
            </div>
        </fieldset>
        <button
            onClick={(clickEvent) => handleSavebuttonClick(clickEvent)}
            className="btn btn-primary">
                Save Updated Info
        </button>
    </ form>
}