import useSWR from 'swr';
import { getBlockDetail } from '.';

function useBlockDetail(chain_id, block_height, onError) {
  const canFetch = chain_id && block_height ? { chain_id, block_height } : null;
  const { data, isValidating } = useSWR(canFetch, getBlockDetail, {
    revalidateIfStale: false,
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    onError,
  });

  return { blockDetail: data, blockDetailLoader: isValidating };
}

export { useBlockDetail };
