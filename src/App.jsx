import Header from "./components/Header";
import Banner from "./components/Banner";
import Collections_carousel from './components/Collections_carousel';
import Bestseller from "./components/Bestseller";
import Special_collection from "./components/Special_collection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Collections_carousel />
      <Bestseller />
      <Special_collection />
      <Footer />
    </div>
  );
}

export default App;
