import React, { useState } from 'react';
import './App.css';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';


const Accordion = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <>
       <div className="col-md-10 col-11 my-3 mx-auto border p-3 mymain">
        <h6>
        <button className="btnn" onClick={()=>setShowInfo(!showInfo)}>
        {showInfo ?   <AiOutlineMinusCircle className="icon"/> : <BsPlusCircle className="icon" /> }
      
        </button>{props.questions}</h6>
        {
            showInfo &&  <h6 className="p-1">{props.answers}</h6>
        }
       
        </div>
        </>
    )
}

export default Accordion;