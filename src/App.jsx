import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider, useCities } from "./contexts/CitiesContaxt";

function App() {
    return (
        <CitiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="app" element={<AppLayout />}>
                        <Route index element={<Navigate replace to="cities" />} />
                        <Route path="cities" element={<CityList />} />
                        <Route path="cities/:id" element={<City />} />
                        <Route path="countries" element={<CountryList />} />
                        <Route path="form" element={<Form />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </CitiesProvider>
    );
}

export default App;
