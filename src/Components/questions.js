import React, { useState } from "react";
import { GrAdd, GrClose } from "react-icons/gr";
import "./index.css";

const Singlequestion = ({title, info})=>{
    const [showinfo , setinfo] = useState(false)
    return (
      <div className="subcontainer">
        <div className="ques-tab">
          <h3>{title}</h3>
          <button id="show-btn" onClick={() => setinfo(!showinfo)}>
            {showinfo ? <GrClose style={{color:'red'}}/> : <GrAdd />}
          </button>
        </div>
        {showinfo && <p>{info}</p>}
      </div>
    );
}

export default Singlequestion;