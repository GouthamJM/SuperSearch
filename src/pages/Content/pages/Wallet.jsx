import React from 'react';
import { useGlobalContext } from '../context/globalContext';
import Header from './components/Header';
import WalletDetail from './components/WalletDetail';
import { useWalletBalance } from '../hooks/swr/useWalletBalance';
// import { useWalletPortfolioGraph } from '../hooks/swr/useWalletPortfolioGraph';

export default function Wallet() {
  const { state } = useGlobalContext();

  const { walletBalance, walletBalanceLoader } = useWalletBalance(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  return (
    <div className="pb-2">
      <div className="pb-2">
        <Header type="wallet" />
      </div>
      {walletBalanceLoader ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="heading6 pb-3">Address details</div>
          {walletBalance ? (
            <div className="walletBox">
              <WalletDetail {...walletBalance} />
            </div>
          ) : (
            <div className="heading5">No account wallet address found</div>
          )}
        </>
      )}
    </div>
  );
}
