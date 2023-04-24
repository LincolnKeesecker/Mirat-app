import { Outlet, Route, Routes } from "react-router-dom"

export const CustomerViews = () => {
		return (
			<Routes>
				<Route path="/" element={
					<>
						<h1>Mirat</h1>
						<div>Buy some dang rum!</div>
	
						<Outlet />
					</>
				}>
	
				</Route>
			</Routes>
		)
	}