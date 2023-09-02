import Navbar from "./Components/Navbar";
import  Hero from './Components/Hero';
import Delivery from './Components/Delivery'
import TopPicks from "./Components/TopPicks";


function App() {
  return (
    <div className="App">
          <Navbar/>
          <Hero/>
          <Delivery/>
          <TopPicks/>
    </div>
  );
}

export default App;
