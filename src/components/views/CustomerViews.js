import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerLocationsList } from "../../locations/CustomerLocations"
import { PurchaseForm } from "../../purchases/PurchaseOrderForm"
import { MyOrders } from "../../purchases/MyOrders"
import { PurchaseEdit } from "../../purchases/PurchaseEdit"

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

				<Route path="myAccount" element={<CustomerLocationsList />} />
				<Route path="purchases/create" element={<PurchaseForm />} />
				<Route path="orders" element={<MyOrders />} />
				<Route path="purchases/:purchaseId/edit" element={<PurchaseEdit />} />

			</Route>
		</Routes>
	)
}