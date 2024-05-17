import { createContext } from "react";

const authContext = createContext();

const authProvider = ({ children }) => {
    return(
        <authContext.Provider>
            {children}
        </authContext.Provider>
    )
   
};
export default authProvider;
