import "./App.css";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Home from "./pages/Home";
import Storyline from "./pages/Storyline";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/storyline" element={<Storyline />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
