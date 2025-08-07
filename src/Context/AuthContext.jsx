import { createContext } from "react";

const AutContext = createContext(null)

const AuthContext = ({ children }) => {
    const value = {
        Name: "mehedi",
    }
    return (
        <>
            <AutContext.Provider value={value}>
                {children}
            </AutContext.Provider>
        </>
    );
};

export { AuthContext, AutContext };