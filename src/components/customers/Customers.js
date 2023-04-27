import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Customer = ({id, fullName, email, password}) => {
    const [customers, setCustomer] = useState([]) 
    const [singleCustomer, setSingleCustomer] = useState() 
    
    const navigate = useNavigate()

    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)

    useEffect(
        () =>{
        fetch(`http://localhost:8088/customers?_expand=user`)
        .then(response => response.json())
        .then((customerArray) => {
            setCustomer(customerArray)
        })
        },
        []
    )

    useEffect(
        () => {
            const myAccount = customers.filter((customer) => customer.userId === miratUserObject.id)[0]
            setSingleCustomer(myAccount)
        },
        [customers]
    )

    return <>
        <h3>My Orders </h3>
            <div>Name : {singleCustomer?.user?.fullName}</div>
            <div>Email : {singleCustomer?.user?.email}</div>
            <div>Password: {singleCustomer?.user?.password}</div>
            
        <button onClick={() => navigate("/myAccount")}>Update Account info</button>
    </>
}