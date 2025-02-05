import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Accueil from "./pages/Accueil/Accueil";
import Services from "./pages/Services/Services";
import Realisation from "./pages/Realisation";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact/Contact";
import Mentions from "./pages/Mentions";
import Footer from "./components/Footer"
import "./css/App.css";

function App() {
  return (
    <div className="flex">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="services" element={<Services />} />
        <Route path="realisation" element={<Realisation />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions" element={<Mentions />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
