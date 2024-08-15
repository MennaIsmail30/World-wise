import { createContext, useContext, useEffect, useState } from "react";

import React from "react";
const CitesContaxt = createContext();
const BASE_URL = "http://localhost:9000";
function CitiesProvider({ children }) {
    const [cities, setCities] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});
    useEffect(function () {
        async function featchCities() {
            try {
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            } catch {
                alert(`there was an error loading data..`);
            } finally {
                setIsLoading(false);
            }
        }
        featchCities();
    }, []);
    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch {
            alert(`there was an error loading data..`);
        } finally {
            setIsLoading(false);
        }
    }
    async function createCity(newCity) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            console.log(data);

            setCities((cities) => [...cities, data]);
        } catch {
            alert(`there was an error loading data..`);
        } finally {
            setIsLoading(false);
        }
    }
    async function deletCity(id) {
        try {
            setIsLoading(true);
            await fetch(`${BASE_URL}/cities/${id}`, {
                method: "DELETE",
            });

            setCities((cities) => cities.filter((city) => city.id !== id));
        } catch {
            alert(`there was an error loading data..`);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CitesContaxt.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                getCity,
                createCity,
                deletCity,
            }}>
            {children}
        </CitesContaxt.Provider>
    );
}
function useCities() {
    const context = useContext(CitesContaxt);
    if (context === undefined) throw new Error("CitiesContext was used outside the CitiesProvider");
    return context;
}
export { CitiesProvider, useCities };
