import { createContext, useContext } from "react";
import errorList from "../../configs/error";

const GlobalStateContext = createContext()

export function useGlobalState() {
    if (!GlobalStateContext) {
        throw new Error(errorList.NOT_IN_GLOBALPROVIDER)
    }
    return useContext(GlobalStateContext)
}

export function GlobalStateProvider({children}) {
    return (
        <GlobalStateContext.Provider value={{}}>
            {children}
        </GlobalStateContext.Provider>
    )
}