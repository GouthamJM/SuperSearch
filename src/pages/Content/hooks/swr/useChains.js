import useSWR from 'swr';
import { getAllChains } from '.';
import { multiply } from 'lodash';
import { useMemo } from 'react';

function useChains() {
  const { data } = useSWR({}, getAllChains, {
    revalidateIfStale: false,
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    refreshInterval: multiply(60, 1000),
  });
  const chainsList = useMemo(() => {
    const chainsWithoutTestNets = [];
    const chainsWithTestNets = [];

    data?.forEach((_item) => {
      _item.label = _item.label.replace(' Mainnet', '');
      if (_item.is_testnet == false && _item.is_appchain == false) {
        chainsWithoutTestNets.push(_item);
      }
      chainsWithTestNets.push(_item);
    });
    return {
      chainsWithoutTestNets,
      chainsWithTestNets,
    };
  }, [data]);
  return { chainsList };
}

export { useChains };
