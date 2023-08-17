import useSWR from 'swr';
import { getTransactionDetail } from '.';

/*
{
    "block_signed_at": "2023-08-09T12:45:59Z",
    "block_height": 17877434,
    "tx_hash": "0x39151af6ba02ac5e3169ff145111137c0186d7b802608e174ea460d4246cbea1",
    "tx_offset": 177,
    "successful": true,
    "from_address": "0x199d5ed7f45f4ee35960cf22eade2076e95b253f",
    "from_address_label": null,
    "to_address": "0x87b3f3c934a13c779e100a5d6e6d7ef577e86671",
    "to_address_label": null,
    "value": "35345563466541400",
    "value_quote": 65.92058041395804,
    "pretty_value_quote": "$65.92",
    "gas_metadata": {
        "contract_decimals": 18,
        "contract_name": "Ether",
        "contract_ticker_symbol": "ETH",
        "contract_address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "supports_erc": null,
        "logo_url": "https://www.datocms-assets.com/86369/1669653891-eth.svg"
    },
    "gas_offered": 21000,
    "gas_spent": 21000,
    "gas_price": 27601378543,
    "fees_paid": "579628949403000",
    "gas_quote": 1.0810261040412639,
    "pretty_gas_quote": "$1.08",
    "gas_quote_rate": 1865.03125,
    "log_events": []
}v
*/
function useTransactionDetail(chain_id, txn_hash, onError, onSuccess) {
  const canFetch = chain_id && txn_hash ? { chain_id, txn_hash } : null;
  const { data, isValidating } = useSWR(canFetch, getTransactionDetail, {
    revalidateIfStale: false,
    shouldRetryOnError: true,
    revalidateOnFocus: false,
    errorRetryCount: 20,
    errorRetryInterval: 1000,
    onError,
    onSuccess,
  });
  return { transactionDetail: data, transactionDeatilLoader: isValidating };
}

export { useTransactionDetail };
