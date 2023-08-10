import useSWR from 'swr';
import { getWalletNFTs } from '.';

function useWalletNFTs(chain_id, wallet_address) {
  const canFetch =
    chain_id && wallet_address
      ? { chain_id, wallet_address, type: 'wallet-nfts' }
      : null;
  const { data, isValidating } = useSWR(canFetch, getWalletNFTs, {
    revalidateIfStale: false,
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return { walletNFTs: data, walletNFTsLoader: isValidating };
}

export { useWalletNFTs };
