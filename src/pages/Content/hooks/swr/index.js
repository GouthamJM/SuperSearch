import { globalGetService } from '../../utils/globalApiServices';

const getAllChains = () => {
  return new Promise((resolve, reject) =>
    globalGetService('/chains/')
      .then((res) => {
        resolve(res?.data?.items);
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
        console.log(res, 'res');
        if (res?.data?.items[0]) {
          resolve(res?.data?.items[0]);
        } else {
          reject(false);
        }
      })
      .catch((err) => {
        reject(err);
      })
  );
};

const getTransactionHistory = ({ chain_id, wallet_address }) => {
  return new Promise((resolve, reject) =>
    globalGetService(`/${chain_id}/address/${wallet_address}/transactions_v3/`)
      .then((res) => {
        if (res.data) {
          resolve(res?.data);
        } else {
          reject(false);
        }
      })
      .catch((err) => {
        reject(err);
      })
  );
};

const getWalletBalance = ({ chain_id, wallet_address }) => {
  return new Promise((resolve, reject) =>
    globalGetService(`/${chain_id}/address/${wallet_address}/balances_v2/`, {
      'no-spam': true,
    })
      .then((res) => {
        if (res?.data) {
          resolve(res.data);
        } else {
          reject(false);
        }
      })
      .catch((err) => {
        reject(err);
      })
  );
};

const getWalletPortfolioGraph = ({ chain_id, wallet_address }) => {
  return new Promise((resolve, reject) =>
    globalGetService(`/${chain_id}/address/${wallet_address}/portfolio_v2/`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  );
};

const getAllWalletApprovals = ({ chain_id, wallet_address }) => {
  return new Promise((resolve, reject) =>
    globalGetService(`/${chain_id}/approvals/${wallet_address}/`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  );
};

const getWalletNFTs = ({ chain_id, wallet_address }) => {
  return new Promise((resolve, reject) =>
    globalGetService(`/${chain_id}/address/${wallet_address}/balances_nft/`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  );
};

const getBlockDetail = ({ chain_id, block_height }) => {
  return new Promise((resolve, reject) =>
    globalGetService(`/${chain_id}/block_v2/${block_height}/`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
  );
};

export {
  getAllChains,
  getTransactionDetail,
  getTransactionHistory,
  getWalletBalance,
  getWalletPortfolioGraph,
  getAllWalletApprovals,
  getWalletNFTs,
  getBlockDetail,
};
