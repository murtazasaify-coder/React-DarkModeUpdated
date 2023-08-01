
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import About from './Components/About';


function App() {
  return (
    <> 
      <Navbar title="Hakimi Dry Fruits" />
      <div className="container my-3" >
        {/* <Form heading="Enter Text Here"/> */}
        <About/>
      </div>
    </>
   
  );
}

export default App;
