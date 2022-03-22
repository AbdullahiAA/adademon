import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Wave from "./components/global/Wave";
import ScrollToTop from "./components/global/ScrollToTop";
import Home from "./pages/Home";
import Storyline from "./pages/Storyline";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";
import FAQ from "./pages/FAQ";
import BuyAgony from "./pages/BuyAgony";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/storyline" element={<Storyline />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/buy-$agony" element={<BuyAgony />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Wave />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
