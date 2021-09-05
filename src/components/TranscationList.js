import React,{ useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transcation from './Transcation'

const TranscationList = () => {
    const {transcations} = useContext(GlobalContext)
    
    return (
        <div>
            <h3>History</h3>
            <ul  className='list'>
                {transcations.map(transcation => ( 
                    <Transcation key ={Transcation.id } transcation={transcation} />
             ))
                }
            </ul>   
        </div>
    )
}

export default TranscationList
