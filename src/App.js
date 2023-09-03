import Navbar from "./Components/Navbar";
import  Hero from './Components/Hero';
import Delivery from './Components/Delivery';
import Picks from './Components/Picks';
import Meal from "./Components/Meal";


function App() {
  return (
    <div className="App">
          <Navbar/>
          <Hero/>
          <Delivery/>
          <Picks/>
          <Meal/>
    
    </div>
  );
}

export default App;
