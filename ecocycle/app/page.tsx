import Accordian from "./components/Accordian";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Map from "./components/Map";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
          <Hero />
          <Accordian />
          <Map />
          <Quiz />
      <Footer />
      </div>
  );
}
