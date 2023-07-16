
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';


function App() {
  return (
    <> 
      <Navbar title="Hakimi Dry Fruits" />
      <div className="container my-3" >
      <Form heading="Enter Text Here"/>
      </div>
    </>
   
  );
}

export default App;
