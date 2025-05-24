import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import CartPage from "./Cart";
import NavBar from "./navbar";
import { CartProvider } from "../context/cartContext";
import ProductPage from "./productPage";
import CheckOut from "./CheckOut";
import Footget from "./Footer";

const AppMain = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productPage" element={<ProductPage />} />
                    <Route path="/cartPage" element={<CartPage />} />
                    <Route path="/checkOut" element={<CheckOut />} />
                </Routes>
                <Footget />
            </CartProvider>
        </BrowserRouter>
    )
}
export default AppMain