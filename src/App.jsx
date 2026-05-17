import "./App.css";
import Home from "./pages/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;