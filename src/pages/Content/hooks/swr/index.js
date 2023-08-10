import { globalGetService } from '../../utils/globalApiServices';

const getAllChains = () => {
  return new Promise((resolve, reject) =>
    globalGetService('/chains/')
      .then((res) => {
        resolve(res.data.items);
      })
      .catch((err) => {
        reject(err);
      })
  );
};

const getTransactionDetail = ({ chain_id, txn_hash }) => {
  return new Promise((resolve, reject) =>
    globalGetService(`/${chain_id}/transaction_v2/${txn_hash}/`)
      .then((res) => {
        resolve(res.data.items[0]);
      })
      .catch((err) => {
        reject(err);
      })
  );
};

const getTransactionHistory = (chain_id, wallet_address) => {
  return new Promise((resolve, reject) =>
    globalGetService(`/${chain_id}/address/${wallet_address}/transactions_v2/`)
      .then((res) => {
        console.log(res, 'res');
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  );
};

export { getAllChains, getTransactionDetail, getTransactionHistory };
