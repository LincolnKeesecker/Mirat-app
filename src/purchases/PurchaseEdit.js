import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const PurchaseEdit = () => {
    const [purchase, assignPurchase] = useState({})

    const {purchaseId} = useParams()
    const navigate = useNavigate()

    useEffect(
        () =>{
            fetch(`http://localhost:8088/purchases/${purchaseId}?_expand=product`)
            .then(response => response.json())
            .then((data) => {
                assignPurchase(data)
            })
    }, [purchaseId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        
        delete purchase.product

        return fetch(`http://localhost:8088/purchases/${purchaseId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
        })
            .then(response => response.json())
            .then(() => {
                navigate(`/orders`)
            })
    }
    
    return <form className="purchaseForm">
        <h3 className="ticketForm__title">Purchase Orders</h3>
        
        <fieldset>
        <div>
            <div className="form-group">
                <label htmlFor="name"># of Cases Ordered</label>
                <input type="number"
                    value={purchase.quantityPurchased}
                    onChange={
                        (evt) => {
                            const copy = { ...purchase }
                            copy.quantityPurchased = parseInt(evt.target.value)
                            assignPurchase(copy)
                        }
                    } />
            </div>
            <div>Size: {purchase?.product?.name}</div>
        </div>
        </fieldset>

        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save Edit
        </button>
    </form>
}