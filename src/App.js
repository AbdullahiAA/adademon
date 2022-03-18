import "./App.css";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
