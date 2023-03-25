import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import {data} from '../useState/list/data'
const AppContext = createContext();
const AppProvider = ({children}) =>{
    const initialState = {
        data:data,
        cart: [],
        value: 0,
    }

    const add = (id) => {
        return dispatch({
            type: 'ADD_TO_CART', payload: state.data.map((myData) => myData.id === id ? myData.id: null)})
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{
        ...state,
        add,
    }}>
        {children}
    </AppContext.Provider>
}

const UseGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, UseGlobalContext };