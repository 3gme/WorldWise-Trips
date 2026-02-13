import { createContext, useContext, useEffect, useState } from "react";
// import City from "../Components/City";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        // console.log(data);
        setCities(data);
      } catch {
        throw new Error("Error loading the data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      throw new Error("Error loading the data");
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
      // NOTE: THIS IS VERY IMPORTANT CAUSE WE DON'T REFETCH THE DATA FROM THE API AFTER SENDING A CITY THERE SO WE KEEP THE UI STATE IN SYNC WITH THE REMOTE API STATE BY ADDING THE CITY TO THE CITIES ARRAY MANUALLY
      setCities((cities) => [...cities, data]);
    } catch {
      throw new Error("Error loading the data");
    } finally {
      setIsLoading(false);
    }
  }
  async function deleteCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      throw new Error("Error deleting the city");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const x = useContext(CitiesContext);
  if (x === undefined)
    throw new Error("using Cities Context in a component not a child");
  return x;
}
