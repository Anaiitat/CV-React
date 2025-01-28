import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Accueil from "./pages/Accueil";
import Services from "./pages/Services";
import Realisation from "./pages/Realisation";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <Nav />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="services" element={<Services />} />
        <Route path="realisation" element={<Realisation />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions" element={<Mentions />} />
      </Routes>
    </div>
  );
}

export default App;
