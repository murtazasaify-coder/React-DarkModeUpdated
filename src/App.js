
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { useState } from 'react';


function App() {
  const[mode,setmode]=useState('light');
 
  const toggle=()=>{
     if(mode==='light')
     {
      setmode('dark')
      document.body.style.backgroundColor='#067a97'
      document.body.style.color='white'
     }else
     {
      setmode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
     }
     
  }  
  return (
    <> 
      <Navbar title="Hakimi Dry Fruits" mode={mode} toggleMode={toggle}  />
      <div className="container my-3" >
        <Form heading="Enter Text Here"  mode={mode}/>
  
      </div>
    </>
   
  );
}

export default App;
