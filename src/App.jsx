import About from "./sections/About";
import Products from "./sections/Products";
import Hero from "./sections/Hero";
import "./css/style.css";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Products />
    </div>
  );
}
