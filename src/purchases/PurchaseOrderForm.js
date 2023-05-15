import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./MyOrders.css"

export const PurchaseForm = () => {
    const localMiratUser = localStorage.getItem("mirat_user")
    const miratUserObject = JSON.parse(localMiratUser)

    const [newPurchase, updateNewPurchase] = useState({
        customerId: miratUserObject.id,
        productId: 1,
        quantityPurchased: 0
    })
    const [products, setProducts] = useState([])
    const [userLocations, setUserLocations] = useState([])

    useEffect(
        () =>{
        fetch(`http://localhost:8088/products`)
        .then(response => response.json())
        .then((productArray) => {
            setProducts(productArray)
        })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=location&userId=${miratUserObject.id}`)
                .then(response => response.json())
                .then((data) => {
                    const singleLocation = data[0]
                    setUserLocations(singleLocation)
                })
        },
        []
    )

    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const purchaseToSendToAPI = {
            customerId: newPurchase.customerId,
            productId: newPurchase.productId,
            quantityPurchased: newPurchase.quantityPurchased
        }

        return fetch(`http://localhost:8088/purchases?_expand=customer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchaseToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/orders")
            })
    }
    return <>
        <h3 className="newPurchase__title">New Purchase Order</h3>
        <form className="newPurchase">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Acct No. {userLocations?.accountNumber}</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Placing Order For: {userLocations?.location?.locationName}</label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="quantityPurchased">Quantity: </label>
                    <input
                        className="input_field"
                        type="number"
                        value={newPurchase.quantityPurchased}
                        onChange={
                            (evt) => {
                                const copy = { ...newPurchase }
                                copy.quantityPurchased = parseFloat(evt.target.value)
                                updateNewPurchase(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="type">Size: </label>
                    <select
                        className="input_field"
                        value={newPurchase.productId}
                        onChange={
                            (evt) => {
                                const copy = { ...newPurchase }
                                copy.productId = parseInt(evt.target.value)
                                updateNewPurchase(copy)
                            }
                        }>
                        <option value={0}>Select a Size</option>
                        {products.map((product) => <option key={product.id} value={product.id}>{product?.size}</option>)}
                    </select>
                </div>
            </fieldset>

            <button
                onClick={(evt) => handleSaveButtonClick(evt)}
                className="btn_btn-primary">
                Submit New Purchase Order
            </button>
        </form>
    </>
}