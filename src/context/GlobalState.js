import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState ={
    transcations : [
        {id : 1, text :'flower', amount: -20},
        {id : 2, text :'salary', amount: 3500},
        {id : 3, text :'book', amount: 40},
        {id : 4, text :'grocesory', amount: -100}
    ]
}

// create context
export const GlobalContext = createContext(initialState)

// create provider
export const GlobalProvider = ({children}) => {
     const [state, dispatch] = useReducer(AppReducer, initialState)

     //actions 
     function handleDelete (id){
         dispatch({
            type : 'delete_transcation',
            payload : id
         });

     }

     function handleAddTranscation (transcation){
        dispatch({
           type : 'add_transcation',
           payload : transcation
        });

    }

      return ( <GlobalContext.Provider value={ {
          transcations : state.transcations ,// we are acessing whole transcations in that transcations state
          handleDelete,
          handleAddTranscation
      }}>
          {children}
      </GlobalContext.Provider>)
}


 
