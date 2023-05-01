import { Outlet, Route, Routes } from "react-router-dom"
import { AdminLocationsList } from "../../locations/AdminLocations"
import { OrdersList } from "../../purchases/OrdersList"
import { PurchaseEdit } from "../../purchases/PurchaseEdit"
import { PurchaseForm } from "../../purchases/PurchaseOrderForm"

export const AdminViews = () => {
		return (
			<Routes>
				<Route path="/" element={
					<>
						<h1>Mirat</h1>
						<h2>Take the Dive!</h2>
	
						<Outlet />
					</>
				}>
	
					<Route path="home" element={ <AdminLocationsList /> } />
					<Route path="orders" element={ <OrdersList /> } />
					<Route path="purchases/:purchaseId/edit" element={<PurchaseEdit />} />

				</Route>
			</Routes>
		)
	}