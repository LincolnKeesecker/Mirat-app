import { useEffect, useState } from "react"
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
    
    useEffect(
        () =>{
            getAllOrders()
        },
        []
    )

    const deleteButton = (order) => {
        if (miratUserObject.staff) {
            return <button onClick={() => {
                fetch(`http://localhost:8088/purchases/${order.id}`, {
                    method: "DELETE"
                })
                    .then(() => {
                        getAllOrders()
                    })
            }} className="order__delete">Delete</button>
        } else {
            return ""
        }
    }

    const canApprove = (order) => {
        if (order.datePurchased === "") {
            return <button onClick={() => {approveButton(order)}} className="order__approve">Approve</button>
        } else {
            return ""
        }
    }

    const approveButton = (order) => {
        const date = new Date()
        const copy = {
            id: order.id,
            customerId: order.customerId,
            productId: order.productId,
            quantityPurchased: order.quantityPurchased,
            datePurchased: date.toDateString()
        }

        return fetch(`http://localhost:8088/purchases/${order.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(copy)
        })
            .then(response=>response.json())
            .then(getAllOrders())
    }

    return <>
        <h3>All Orders</h3>
        {purchases.map((purchase) =>
            <section className="order" key={`purchase--${purchase.id}`}>
                <div className="order__info">
                    <div>Order Number # {purchase.id}</div>
                    <div># {purchase.quantityPurchased} cases purchased</div>
                    <div>Size: {purchase?.product?.name}</div>
                    {purchase?.datePurchased ? <div>Date Purchased: {purchase?.datePurchased}</div> : <></>}
                </div>
                <button onClick={() => navigate(`/purchases/${purchase.id}/edit`)} className="order__edit">Edit Purchase</button>
                <div className="adminButtons">
                    {deleteButton(purchase)}
                    {canApprove(purchase)}
                </div>
            </section>
        )}
    </>
}