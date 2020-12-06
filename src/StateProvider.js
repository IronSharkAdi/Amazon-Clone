import React , { createContext , useContext , useReducer  } from 'react'

// Prepares the data layer for us
export const StateContext  = createContext()

// wraps the app in that data layer
export const StateProvider = ({ reducer , initialState , children}) =>(
    <StateContext.Provider value={useReducer(reducer , initialState)} >
            {children}
    </StateContext.Provider>
)

// pulls info from data layer
export const useStateValue  = () => useContext(StateContext);