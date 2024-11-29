import Story from "@/components/Story";
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </div>
  );
}
