import Home from "./pages/home";
import Category from "./pages/category";
import Contact from "./pages/contact";
import "./css/style.css";

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
