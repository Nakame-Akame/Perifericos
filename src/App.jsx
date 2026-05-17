import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;