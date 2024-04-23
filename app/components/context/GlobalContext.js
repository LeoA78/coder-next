"use client";
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [ordenanzas, setOrdenanzas] = useState([]);

  useEffect(() => {
    const fetchOrdenanzas = async () => {
      setOrdenanzas(ordenanzas);
    };

    fetchOrdenanzas();
  }, []);

  const filterBySearch = (search) => {
    if (search === "") {
      return;
    }

    const filteredOrdenanzas = ordenanzas.filter((ordenanza) => {
      return ordenanza.description.toLowerCase().includes(search.toLowerCase());
    });

    setOrdenanzas(filteredOrdenanzas);
  };

  return (
    <GlobalContext.Provider value={{ filterBySearch, ordenanzas }}>
      {children}
    </GlobalContext.Provider>
  );
};
