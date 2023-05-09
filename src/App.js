import './App.css';
import About from './components/About';
import Background from './components/Background';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Background />
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Router>
    </div>
  );
}

export default App;
