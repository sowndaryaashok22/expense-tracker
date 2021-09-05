import React from 'react'
import { useState,  useContext} from 'react'
import { GlobalContext  } from '../context/GlobalState';

const AddTranscation = () => {
    const [text, setText] = useState(' ');
    const [amount, setAmount] = useState(0);
   const {handleAddTranscation} = useContext(GlobalContext)

   const onSubmit  =(e) =>{
       e.preventDefault();
       const newTranscation ={
           id: Math.floor(Math.random()*10000000),
           text : text, //you can simply specify as text coz it is atken from above addtranscation
           amount : +amount,
       }
       handleAddTranscation(newTranscation);
       setText('');
       setAmount('');
   }




    return (
        <>
             <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} placeholder="Enter text..."  onChange={(e) =>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
            </label >
          <input type="number" value={amount} placeholder="Enter amount..." onChange={(e) =>setAmount(e.target.value)}/>
          
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}

export default AddTranscation
