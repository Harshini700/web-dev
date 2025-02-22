
// src/context/AppContext.js
import  { createContext, useState } from "react";

// Create the context

export const AppContext = createContext();

// Define the provider
export const AppContextProvider = (props) => {

    const [searchFilter,setSearchFilter]=useState({
        title:'',
        lacation:'',
    })
    const [isSearched,setIsSearched]=useState(false)
    
    const value = {
        setSearchFilter,searchFilter,
        isSearched,setIsSearched,
        };

    return (
        <AppContext.Provider value={value}>

            {props.children}
        </AppContext.Provider>
    );
};
