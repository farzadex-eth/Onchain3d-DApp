import './App.css';
import Background from './components/Background';
import MainPage from './components/MainPage';
import MyTokens from './components/MyTokens';
import Navbar from './components/Navbar';
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
              <Route exact path="/mytokens" element={<MyTokens />} />
            </Routes>
          </Router>
          </TokenProvider>
        </ContractProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
