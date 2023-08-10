import { createContext, useContext, useReducer } from "react";
import errorList from "../../configs/errors";

const GlobalStateContext = createContext()

export function useGlobalState() {
    if (!GlobalStateContext) {
        throw new Error(errorList.NOT_IN_GLOBALPROVIDER)
    }
    return useContext(GlobalStateContext)
}

export function GlobalStateProvider({children}) {
    const [data, dispatch] = useReducer((prevState, action) => {
        switch (action.type) {
            case 'GET':
                const tempData = {...prevState}
                tempData[action.resource] = action.data
                return tempData
            default:
                throw new Error(errorList.INVALID_DATA_ACTION)
        }
    }, {})
    return (
        <GlobalStateContext.Provider value={{data, dispatch}}>
            {children}
        </GlobalStateContext.Provider>
    )
}