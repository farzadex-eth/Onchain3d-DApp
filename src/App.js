import './App.css';
import About from './components/About';
import Background from './components/Background';
import MainPage from './components/MainPage';
import MyTokens from './components/MyTokens';
import Mint from './components/Mint';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ContractProvider } from './ContractContext';
import { TokenProvider } from './TokenContext';
import { WalletProvider } from './WalletContext';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <ContractProvider>
        <TokenProvider>
          <Background />
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/:tid" element={<MainPage />} />
              <Route exact path="/mytokens" element={<MyTokens />} />
              <Route exact path="/mint" element={<Mint />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Router>
          <Footer />
          </TokenProvider>
        </ContractProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
