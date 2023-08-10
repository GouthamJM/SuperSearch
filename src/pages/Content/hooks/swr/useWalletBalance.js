import useSWR from 'swr';
import { getWalletBalance } from '.';
import { useMemo } from 'react';

function useWalletBalance(chain_id, wallet_address) {
  const canFetch =
    chain_id && wallet_address
      ? { chain_id, wallet_address, type: 'wallet-balance' }
      : null;

  const { data, isValidating } = useSWR(canFetch, getWalletBalance, {
    revalidateIfStale: false,
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });

  const walletBalance = useMemo(() => {
    let totalBalanceIn$ = 0;
    let totalBalanceIn$24HrsAgo = 0;
    let tokens = [];
    let nativeTokenBalance = null;

    data?.items?.forEach((_item) => {
      totalBalanceIn$ += _item?.quote || 0;
      totalBalanceIn$24HrsAgo += _item.quote_24h || 0;
      if (_item.balance !== '0') {
        tokens.push(_item);
      }
      if (_item.native_token) {
        nativeTokenBalance = _item;
      }
    });

    return {
      tokens,
      totalBalanceIn$,
      totalBalanceIn$24HrsAgo,
      nativeTokenBalance,
    };
  }, [data]);

  return { walletBalance, walletBalanceLoader: isValidating };
}

export { useWalletBalance };
