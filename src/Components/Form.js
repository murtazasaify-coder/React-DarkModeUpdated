import React from 'react'

export default function Form(props) {
  return (
    
    <div>
      <div>
        <h1>{props.heading}</h1>
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
      </div>
      <button className="btn btn-primary">Convert to Upper Case</button>
    </div>
  )
}
