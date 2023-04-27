import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerLocationsList } from "../../locations/CustomerLocations"
import { PurchaseForm } from "../../purchases/PurchaseOrderForm"
import { MyOrders } from "../../purchases/MyOrders"
import { PurchaseEdit } from "../../purchases/PurchaseEdit"
import { Customer } from "../customers/Customers"

export const CustomerViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Mirat</h1>
					<h2>Take the Dive!</h2>

					<Outlet />
				</>
			}>

				<Route path="home" element={<CustomerLocationsList />} />
				<Route path="purchases/create" element={<PurchaseForm />} />
				<Route path="orders" element={<MyOrders />} />
				<Route path="purchases/:purchaseId/edit" element={<PurchaseEdit />} />
				<Route path="myAccount" element={<Customer />} />

			</Route>
		</Routes>
	)
}