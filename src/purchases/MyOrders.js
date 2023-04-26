import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./MyOrders.css"

export const MyOrders = () => {
    const [customerOrders, setCustomerOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])

    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)

    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/purchases?_expand=customer&_expand=product`)
                .then(response => response.json())
                .then((ordersArray) => {
                    setCustomerOrders(ordersArray)
                })
        },
        []
    )

    useEffect(
        () => {
            const myOrders = customerOrders.filter((order) => order.customerId === miratUserObject.id)
            setFilteredOrders(myOrders)
        },
        [customerOrders]
    )

    return <>
        <h3>My Orders </h3>
        {filteredOrders.map((order) =>
            <section className="order" key={`order--${order.id}`}>
                <div>
                    <div># {order.quantityPurchased} cases ordered</div>
                    <div>Size: {order?.product?.name}</div>
                </div>
                <button onClick={() => navigate(`/purchases/${order.id}/edit`)}>Edit Order</button>
            </section>
        )}

        <button onClick={() => navigate("/purchases/create")}>New Purchase Order</button>
    </>
}