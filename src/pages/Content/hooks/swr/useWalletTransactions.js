import useSWR from 'swr';
import { getTransactionHistory } from '.';

function useWalletTransactions(chain_id, wallet_address) {
  const canFetch =
    chain_id && wallet_address
      ? { chain_id, wallet_address, type: 'wallet-transactions' }
      : null;

  const { data, isValidating } = useSWR(canFetch, getTransactionHistory, {
    revalidateIfStale: false,
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return {
    walletTransactions: data,
    walletTransactionLoader: isValidating,
  };
}

export { useWalletTransactions };
