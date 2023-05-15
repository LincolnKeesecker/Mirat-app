import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerLocationsList } from "../locations/CustomerLocations"
import { PurchaseForm } from "../../purchases/PurchaseOrderForm"
import { MyOrders } from "../../purchases/MyOrders"
import { PurchaseEdit } from "../../purchases/PurchaseEdit"
import { Customer } from "../customers/Customers"
import { CustomerEdit } from "../customers/CustomerEdit"
import "../auth/Login.css"


export const CustomerViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
						<fieldset className="heading">
							<h1 className="logo">
								<img src="/priLogo.jpg"/>
							</h1>
							<h2>Take the Dive!</h2>
						</fieldset>
						<Outlet />
				</>
			}>

				<Route path="home" element={<CustomerLocationsList />} />
				<Route path="purchases/create" element={<PurchaseForm />} />
				<Route path="orders" element={<MyOrders />} />
				<Route path="purchases/:purchaseId/edit" element={<PurchaseEdit />} />
				<Route path="myAccount" element={<Customer />} />
				<Route path="myAccount/:customerId/edit" element={<CustomerEdit />} />

			</Route>
		</Routes>
	)
}