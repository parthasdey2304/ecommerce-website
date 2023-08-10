import Header from "./components/Header";
import Banner from "./components/Banner";
import Collections_carousel from './components/Collections_carousel';
import Bestseller from "./components/Bestseller";
import Offer_tile from "./components/Offer_tile";
import Special_collection from "./components/Special_collection";
import Footer from "./components/Footer";
import Up_arrow from "./components/Up_arrow";

function App() {
  return (
    <div className="App">
      {/* <Up_arrow /> */}
      <Header />
      <Banner />
      <Collections_carousel />
      <Bestseller />
      <Offer_tile />
      <Special_collection />
      <Footer />
    </div>
  );
}

export default App;
