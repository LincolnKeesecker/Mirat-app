import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../../locations/Locations"

export const AdminViews = () => {
		return (
			<Routes>
				<Route path="/" element={
					<>
						<h1>Mirat</h1>
						<h3>Take the Dive!</h3>
	
						<Outlet />
					</>
				}>
	
					<Route path="myAccount" element={ <LocationsList /> } />

				</Route>
			</Routes>
		)
	}