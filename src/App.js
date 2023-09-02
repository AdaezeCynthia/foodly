import Navbar from "./Components/Navbar";
import  Hero from './Components/Hero';
import Delivery from './Components/Delivery';
import Picks from './Components/Picks';


function App() {
  return (
    <div className="App">
          <Navbar/>
          <Hero/>
          <Delivery/>
          <Picks/>
    </div>
  );
}

export default App;
