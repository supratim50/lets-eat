import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero";
import HeadlineCards from "./sections/Headline";
import Menu from "./sections/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Menu />
    </div>
  );
}

export default App;
