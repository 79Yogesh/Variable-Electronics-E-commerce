import {  Main, Product, Footer } from "../components";
import HomeCarousel from "../components/HomeCarousel";
import Carousel from "../components/ProductCarousel";

function Home() {
  return (
    <>
     
     
      <HomeCarousel/>
      <Carousel/>
      {/* <Product /> */}
      <Footer />
    </>
  )
}

export default Home