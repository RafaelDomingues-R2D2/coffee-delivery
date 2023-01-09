import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayouts"
import { Checkout } from "./pages/checkout"
import { Home } from "./pages/Home"
import { Success } from "./pages/Success"

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/Success" element={<Success />} />
            </Route>
        </Routes>
    )
}