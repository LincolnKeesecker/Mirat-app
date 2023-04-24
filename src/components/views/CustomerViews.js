import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../../locations/Locations"

export const CustomerViews = () => {
		return (
			<Routes>
				<Route path="/" element={
					<>
						<h1>Mirat</h1>
						<h3>Take the dive!</h3>
	
						<Outlet />
					</>
				}>

					<Route path="locations" element={ <LocationsList /> } />

				</Route>
			</Routes>
		)
	}