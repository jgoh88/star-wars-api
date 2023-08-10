import { createContext, useContext, useReducer } from "react";
import errorList from "../../configs/errors";

const GlobalStateContext = createContext()



export function useGlobalState() {
    if (!GlobalStateContext) {
        throw new Error(errorList.NOT_IN_GLOBALPROVIDER)
    }
    return useContext(GlobalStateContext)
}

function reducer(prevState, action) {
    switch (action.type) {
        case 'UPDATE': {
            const tempData = {...prevState}
            tempData[action.resource] = action.data
            return tempData
        }
        // case 'POST': {
        //     return action.data  
        // }    
        // case 'DELETE': {
        //     return action.data
        // }    
        default: {
            throw new Error(errorList.INVALID_DATA_ACTION)
        }
    }
}

export function GlobalStateProvider({children}) {
    const [data, dispatch] = useReducer(reducer, {})
    return (
        <GlobalStateContext.Provider value={{data, dispatch}}>
            {children}
        </GlobalStateContext.Provider>
    )
}