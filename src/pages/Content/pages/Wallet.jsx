import React from 'react';
import { useGlobalContext } from '../context/globalContext';
import WalletDetail from './components/WalletDetail';
import { useWalletBalance } from '../hooks/swr/useWalletBalance';
import { useWalletTransactions } from '../hooks/swr/useWalletTransactions';
import WalletTransactions from './components/WalletTransactions';
import { useEffect } from 'react';

export default function Wallet() {
  const { state, updateAPILoader } = useGlobalContext();

  const { walletBalance, walletBalanceLoader } = useWalletBalance(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  const { walletTransactions, walletTransactionLoader } = useWalletTransactions(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  useEffect(() => {
    if (!walletBalanceLoader && !walletTransactionLoader) {
      updateAPILoader(false);
    }
  }, [walletBalanceLoader, walletTransactionLoader]);

  return (
    <div>
      {walletBalanceLoader || walletTransactionLoader ? null : (
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
