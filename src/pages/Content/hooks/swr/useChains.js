import useSWR from 'swr';
import { getAllChains } from '.';
import { useMemo } from 'react';
import { ALLOWED_CHAINS_ID } from '../../constants';

function useChains() {
  const { data } = useSWR({}, getAllChains, {
    revalidateIfStale: false,
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });
  const chainsList = useMemo(() => {
    const chainsWithoutTestNets = [];
    const chainsWithTestNets = [];

    data?.forEach((_item) => {
      if (ALLOWED_CHAINS_ID?.includes(_item.chain_id)) {
        _item.label = _item.label.replace(' Mainnet', '');
        if (_item.is_testnet === false && _item.is_appchain === false) {
          chainsWithoutTestNets.push(_item);
        }
        chainsWithTestNets.push(_item);
      }
    });
    return {
      chainsWithoutTestNets,
      chainsWithTestNets,
    };
  }, [data]);
  return { chainsList };
}

export { useChains };
