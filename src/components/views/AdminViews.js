import { Outlet, Route, Routes } from "react-router-dom"
import { AdminLocationsList } from "../../locations/AdminLocations"

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
	
					<Route path="myAccount" element={ <AdminLocationsList /> } />

				</Route>
			</Routes>
		)
	}