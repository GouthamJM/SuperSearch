import React from 'react';
import { useGlobalContext } from '../context/globalContext';
import Header from './components/Header';
import WalletDetail from './components/WalletDetail';
import { useWalletBalance } from '../hooks/swr/useWalletBalance';
import { useWalletTransactions } from '../hooks/swr/useWalletTransactions';
import WalletTransactions from './components/WalletTransactions';

export default function Wallet() {
  const { state } = useGlobalContext();

  const { walletBalance, walletBalanceLoader } = useWalletBalance(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  const { walletTransactions, walletTransactionLoader } = useWalletTransactions(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  console.log(walletTransactions?.items, 'walletTransactions');

  return (
    <div className="pb-2">
      <div className="pb-2">
        <Header type="wallet" />
      </div>
      {walletBalanceLoader || walletTransactionLoader ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="heading6 pb-2">Address details</div>
          {walletBalance ? (
            <div className="walletBox pb-4">
              <WalletDetail {...walletBalance} />
            </div>
          ) : (
            <div className="heading5">No account wallet address found</div>
          )}

          <div className="heading6 pt-4 pb-2">Recent Transactions</div>
          {walletTransactions.items ? (
            <div className="walletTransctionBox">
              <WalletTransactions transactions={walletTransactions.items} />
            </div>
          ) : (
            <div className="heading5">No account wallet address found</div>
          )}
        </>
      )}
    </div>
  );
}
