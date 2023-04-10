import './App.css';
import Background from './components/Background';
import Navbar from './components/Navbar';
import TokenView from './components/TokenView';
import { ContractProvider } from './ContractContext';
import { WalletProvider } from './WalletContext';

function App() {
  return (
    <div className="App">
      <WalletProvider>
        <ContractProvider>
          <Background />
          <Navbar />
          <TokenView />
        </ContractProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
