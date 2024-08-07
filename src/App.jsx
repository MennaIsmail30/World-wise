import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="app" element={<AppLayout />} />
                <Route path="*" element={<NotFound />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
