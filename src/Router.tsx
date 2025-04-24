import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";
import { ProductsProvider } from "./contexts/ProductsInCartContext1";


export function Router() {
	return (
		<ProductsProvider>
			<Routes>
				<Route path="/" element={<DefaultLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/success" element={<Success />} />
				</Route>
			</Routes >
		</ProductsProvider>
	)
}