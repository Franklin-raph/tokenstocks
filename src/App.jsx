import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <div className="hidden 887:block bg-transparent py-[2.4rem]"></div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
