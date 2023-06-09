import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@components/layouts/DefaultLayout";

import { Home } from "@pages/Home";
import { Checkout } from "./pages/Checkout";
import { Finished } from "./pages/Finished";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/finished" element={<Finished />} />
			</Route>
		</Routes>
	);
}
