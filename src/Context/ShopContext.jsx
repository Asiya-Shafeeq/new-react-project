import React,{ createContext } from 'react';
import all_products from '../Components/Assets/all_products'



export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const cotextValue = {all_products};

    return (
        <ShopContext.Provider value={cotextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;
