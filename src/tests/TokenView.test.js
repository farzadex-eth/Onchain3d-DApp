import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import TokenView from '../components/TokenView';
import { ContractProvider } from '../ContractContext';
import { TokenProvider } from '../TokenContext';
import { WalletProvider } from '../WalletContext';

afterEach(cleanup);

test('Check Token View', async () => {
  const tokenView = render(
    <WalletProvider>
      <ContractProvider>
        <TokenProvider>
          <TokenView />
        </TokenProvider>
      </ContractProvider>
    </WalletProvider>
  );

  const buttonElement = screen.getByText(/Fetch Token/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(tokenView.getByText(/Fetch Token/i));

  expect(tokenView.getByAltText(/token-view-loading/i));

  await waitFor(() => {
    expect(tokenView.findByText(/Cube/i));
  })

})
