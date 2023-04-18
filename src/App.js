import './App.css';
import Background from './components/Background';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import { ContractProvider } from './ContractContext';
import { WalletProvider } from './WalletContext';

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <ContractProvider>
          <Background />
          <Navbar />
          <MainPage />
        </ContractProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
