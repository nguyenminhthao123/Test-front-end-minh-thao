import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/designs_reducer'
import { designsData } from '../data'
const DesignsContext = createContext()

const getData = () => {
    let data = localStorage.getItem('data')
    if (data) {
        return JSON.parse(localStorage.getItem('data'))
    } else {
        return designsData
    }
}
const initialState = {
    designsData: getData(),
}
export const DesignsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleClickLike = (id) => {
        dispatch({ type: 'UPDATELIKE', payload: id })
    }
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(designsData))
    }, [])
    return <DesignsContext.Provider
        value={{
            ...state,
            handleClickLike
        }}
    >{children}</DesignsContext.Provider>
}
export const useDesignContext = () => {
    return useContext(DesignsContext)
}