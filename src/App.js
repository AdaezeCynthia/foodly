import Navbar from "./Components/Navbar";
import  Hero from './Components/Hero';
import Delivery from './Components/Delivery';
import Picks from './Components/Picks';
import Meal from "./Components/Meal";
import Trending from "./Components/Trending";
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Hero/>
          <Delivery/>
          <Picks/>
          <Meal/>
          <Trending/>
          <Newsletter/>
          <Footer/>
    
    </div>
  );
}

export default App;
