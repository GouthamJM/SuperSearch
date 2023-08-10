import useSWR from 'swr';
import { getWalletPortfolioGraph } from '.';

function useWalletPortfolioGraph(chain_id, wallet_address) {
  const canFetch =
    chain_id && wallet_address
      ? { chain_id, wallet_address, type: 'wallet-portfolio-graph' }
      : null;
  const { data, isValidating } = useSWR(canFetch, getWalletPortfolioGraph, {
    revalidateIfStale: false,
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return { walletPortfolioGraph: data, walletPortfolioLoader: isValidating };
}

export { useWalletPortfolioGraph };
