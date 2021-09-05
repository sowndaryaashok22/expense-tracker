import React from 'react'

export default (state, action) => {
    switch (action.type) {
        case 'delete_transcation':
            return {
                ...state ,
                transcations : state.transcations.filter((transcation)=>transcation.id !== action.payload)
            }
            case 'add_transcation':
            return {
                ...state ,
                transcations : [action.payload, ...state.transcations]
            }
    
        default:
            return state;
    }
}
