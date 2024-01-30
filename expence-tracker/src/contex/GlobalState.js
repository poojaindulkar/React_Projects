import React, {createContext, useContext,useReducer} from "react";
import AppReducer from './AppReducer'
//Initial State
const initialState={
    transactions:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//crete contex
export const GlobalContext=createContext(initialState)

//Provider Component
export const GlobalProvider = ({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState);

    //Actions 
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSATION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        
        }}>
        {children}
    </GlobalContext.Provider>)
}