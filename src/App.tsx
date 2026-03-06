import Categories from "./components/categories";
import Footer from "./components/footer";
import Hero from "./components/hero";
import LimitedDeals from "./components/limiteddeals";
import Navbar from "./components/navbar";
import OurProducts from "./components/ourproducts";
import PartnerBrand from "./components/partnerbrand";
import WhyChooseUs from "./components/whychooseus";

function App() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero />
        <WhyChooseUs />
        <PartnerBrand />
        <Categories />
        <OurProducts />
        <LimitedDeals />
      </div>
      <Footer />
    </>
  );
}

export default App;
