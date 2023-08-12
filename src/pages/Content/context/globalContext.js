import { useContext } from 'react';
import { createContext, useReducer } from 'react';
import { getSearchType, searchTypes } from '../utils';
import { useMemo } from 'react';

export const allPages = {
  home: 'home',
  transaction: 'transaction',
  wallet: 'wallet',
};

const initValue = {
  steps: allPages.home,
  searchForm: {
    search: '',
    chain: {
      name: 'eth-mainnet',
      chain_id: '1',
      is_testnet: false,
      db_schema_name: 'chain_eth_mainnet',
      label: 'Ethereum Mainnet',
      category_label: 'Ethereum',
      logo_url: 'https://www.datocms-assets.com/86369/1669653891-eth.svg',
      black_logo_url:
        'https://www.datocms-assets.com/86369/1669619544-ethereum.png',
      white_logo_url:
        'https://www.datocms-assets.com/86369/1669619533-ethereum.png',
      is_appchain: false,
      appchain_of: null,
    },
    searchType: '',
  },
  apiLoader: false,
};

const actions = {
  resetStep: 'resetStep',
  updateStep: 'updateStep',
  updateSearchForm: 'updateSearchForm',
  resetSearchForm: 'resetSearchForm',
  updateAPILoader: 'updateAPILoader',
};
export const GlobalContext = createContext(initValue);

const reducer = (state, action) => {
  switch (action.type) {
    case actions.resetStep:
      return { ...state, steps: allPages.home };
    case actions.updateStep:
      return { ...state, steps: action.payload };
    case actions.updateSearchForm:
      return { ...state, searchForm: action.payload };
    case actions.resetSearchForm:
      return { ...state, searchForm: initValue.searchForm };
    case actions.updateAPILoader:
      return { ...state, apiLoader: action.payload };
    default:
      return state;
  }
};
export function useGlobalReducer() {
  const [state, dispatch] = useReducer(reducer, initValue);
  const globalState = useMemo(() => {
    return {
      state,
      updateStep: (step) => {
        dispatch({ type: actions.updateStep, payload: step });
      },
      resetStep: (step) => {
        dispatch({ type: actions.resetStep, payload: step });
      },
      updateSearchForm: (search, chain, searchType) => {
        dispatch({
          type: actions.updateSearchForm,
          payload: { search, chain, searchType },
        });
      },
      updateAPILoader: (apiLoader) => {
        dispatch({
          type: actions.updateAPILoader,
          payload: apiLoader,
        });
      },
      updatePageDetail: function (search, chain) {
        const searchType = getSearchType(search);
        console.log(this, 'this');
        console.log(searchType, 'searchType');
        console.log(globalState, 'globalState');
        console.log(chain, 'chain');
        globalState.updateSearchForm(search, chain, searchType);
        globalState.updateAPILoader(true);
        console.log(searchTypes, 'searchTypes');
        if (searchType === searchTypes.address) {
          console.log('updated address');
          globalState.updateStep(allPages.wallet);
        } else if (searchType === searchTypes.transactionHash) {
          console.log('updated transactionHash');
          globalState.updateStep(allPages.transaction);
        }
      },
      resetSearchForm: () => {
        dispatch({ type: actions.resetSearchForm });
      },
    };
  }, [state]);
  return globalState;
}

export function useGlobalContext() {
  const {
    state,
    updateStep,
    resetStep,
    updateSearchForm,
    resetSearchForm,
    updateAPILoader,
    updatePageDetail,
  } = useContext(GlobalContext);
  return {
    state,
    updateStep,
    resetStep,
    updateSearchForm,
    resetSearchForm,
    updateAPILoader,
    updatePageDetail,
  };
}
