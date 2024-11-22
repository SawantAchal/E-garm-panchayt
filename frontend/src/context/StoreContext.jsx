import { createContext, useState } from "react";
import 'dotenv'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const url = import.meta.env.VITE_BACKEND_URL
    const [token , setToken] = useState([])

    const contextValue = {
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider