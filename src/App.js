import "./App.css";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Home from "./pages/Home";
import Storyline from "./pages/Storyline";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Tokenomics from "./pages/Tokenomics";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/storyline" element={<Storyline />} />
            {/* Roadmap */}
            {/* FAQ */}
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
