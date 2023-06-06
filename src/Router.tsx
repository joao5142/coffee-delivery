import { DefaultLayout } from "@components/layouts/DefaultLayout";
import { Home } from "@pages/Home";
import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
