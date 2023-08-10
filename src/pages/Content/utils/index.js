import { chainServices } from './chains';
import { isAddress, formatUnits } from 'ethers';
import moment from 'moment';
import { divide } from 'lodash';

const isValidEOAAddress = (address) => {
  return isAddress(address);
};
const isValidTransactionHash = (hash) => {
  const regex = /^0x([A-Fa-f0-9]{64})$/;
  return regex.test(hash);
};

const isValidBlockNumber = async (blockNumber, rpcUrl) => {
  // const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  // try {
  //   const block = await provider.getBlock(blockNumber);
  //   return !!block;
  // } catch (error) {
  //   return false;
  // }
};

const searchTypes = {
  address: 'address',
  transactionHash: 'transactionHash',
  blockNumber: 'blockNumber',
};

const getSearchType = (_search) => {
  if (isValidEOAAddress(_search)) {
    return searchTypes.address;
  } else if (isValidTransactionHash(_search)) {
    return searchTypes.transactionHash;
  } else {
    return undefined;
  }
};

const getStringType = (_val) => {
  return {
    [searchTypes.address]: 'Address',
    [searchTypes.transactionHash]: 'Transaction',
    [searchTypes.blockNumber]: 'Block',
    undefined: '',
  }[_val];
};

const gasValueWeiToGwei = (weiValue) => {
  return formatUnits(weiValue, 'gwei');
};

const getTokenFormattedNumber = (
  value,
  decimals = 18,
  roundOff = true,
  fractions = 0
) => {
  const _decimals = decimals || 18;
  const _value = value || 0;
  const _expoValue = Math.pow(10, _decimals);
  let _calculated = _value / _expoValue;
  if (!roundOff) {
    return Number(_calculated);
  }
  let _decimalFixed = fractions;
  if (fractions == 0) {
    _decimalFixed = 2;
    if (_calculated < 100) {
      _decimalFixed = 6;
    }
  }
  const expo = Math.pow(10, _decimalFixed);
  _calculated = Math.floor(_calculated * expo) / expo;
  return Number(_calculated.toFixed(_decimalFixed));
};

const formatDateTime = (str) => {
  return moment.unix(str).format('MMM DD, YYYY h:mm A');
};

const formatDate = (str, isWithTime = false, isWithSuffix = false) => {
  return moment(str).format(
    `${
      isWithTime && isWithSuffix
        ? 'MMM DD, YYYY h:mm A'
        : isWithTime
        ? 'ddd DD MMM YYYY, HH:mm:ss'
        : 'MMM DD, YYYY'
    }`
  );
};

const getPercentage = (numerator, denominator, options = { decimal: 2 }) => {
  if (denominator === 0) return 0;
  return Number(
    (divide(numerator, denominator) * 100).toFixed(options.decimal)
  );
};
export {
  chainServices,
  getStringType,
  getSearchType,
  searchTypes,
  isValidBlockNumber,
  isValidTransactionHash,
  isValidEOAAddress,
  formatDate,
  formatDateTime,
  getTokenFormattedNumber,
  gasValueWeiToGwei,
  getPercentage,
};
