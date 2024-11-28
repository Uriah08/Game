import About from "./components/About";
import Hero from "./components/Hero";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <About/>
    </div>
  );
}
