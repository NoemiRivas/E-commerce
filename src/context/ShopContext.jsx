import React, { createContext} from "react";
import data_product from "../components/Assets/svg/data_product"

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue  = {data_product};
    return (
       <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
        
}

export default ShopContextProvider;
// productos a mostrar en diferentes paginas de la web