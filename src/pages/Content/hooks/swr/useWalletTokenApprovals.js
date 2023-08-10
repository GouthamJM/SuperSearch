import useSWR from 'swr';
import { getAllWalletApprovals } from '.';

function useWalletTokenApprovals(chain_id, wallet_address) {
  const canFetch =
    chain_id && wallet_address
      ? { chain_id, wallet_address, type: 'wallet-token-approvals' }
      : null;
  const { data, isValidating } = useSWR(canFetch, getAllWalletApprovals, {
    revalidateIfStale: false,
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  return {
    walletTokenApprovals: data,
    walletTokenApprovalsLoader: isValidating,
  };
}

export { useWalletTokenApprovals };
