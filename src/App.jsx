import "./css/style.css";
import Category from "./sections/category";
import Contact from "./sections/contact";
import Home from "./sections/home";

export default function App() {
  return (
    <div className="App">
      <h1>Folder organization</h1>
      <Home />
      <Category />
      <Contact />
    </div>
  );
}
