import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./MyOrders.css"

export const OrdersList = () => {
    const [purchases, setPurchases] = useState([])

    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)

    const navigate = useNavigate()

    const getAllOrders = () => {
        fetch(`http://localhost:8088/purchases?_expand=customer&_expand=product`)
            .then(response => response.json())
            .then((purchasesArray) => {
                setPurchases(purchasesArray)
            })
    }

    const deleteButton = (order) => {
        if (miratUserObject.staff) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/purchases/${order.id}`, {
                    method: "DELETE"
                })
                    .then(() => {
                        getAllOrders()
                    })
            }} className="order__delete">Delete Order</button>
        } else {
            return ""
        }
    }

    return <>
        <h3>All Orders</h3>
        {getAllOrders(purchases)}
        {purchases.map((purchase) =>
            <section className="purchase" key={`purchase--${purchase.id}`}>
                <div>
                    <div>Order Number # {purchase.id}</div>
                    <div># {purchase.quantityPurchased} cases purchased</div>
                    <div>Size: {purchase?.product?.name}</div>
                </div>
                <button onClick={() => navigate(`/purchases/${purchase.id}/edit`)} className="purchase__edit">Edit Purchase</button>
                {deleteButton(purchase)}
            </section>
        )}
    </>
}