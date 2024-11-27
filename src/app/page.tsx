import Hero from "./components/Hero";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero/>
      <section className="z-0 min-h-screen bg-blue-50"></section>
    </div>
  );
}
