import React, { useState } from 'react'

export default function Form(props) {
    const  handleonclick=()=>{
        // console.log("before" +text);
        let textlocal=text.toUpperCase();
        settext(textlocal);
        
    }
    const  handlechange=(event)=>{
        settext(event.target.value);
        
    }
    const [text, settext] = useState("Welcome to hakimi Provision");
  return (
    
    <div>
      <div>
        <h1>{props.heading}</h1>
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" onChange={handlechange} value={text} rows="9"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleonclick}>Convert to Upper Case</button>
    </div>
  )
}
