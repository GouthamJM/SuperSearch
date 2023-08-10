import { useContext } from 'react';
import { createContext, useReducer } from 'react';

export const allStates = {
  home: 'home',
  transaction: 'transaction',
};
const initValue = {
  steps: allStates.home,
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
  },
};

const actions = {
  resetStep: 'resetStep',
  updateStep: 'updateStep',
  updateSearchForm: 'updateSearchForm',
  resetSearchForm: 'resetSearchForm',
};
export const GlobalContext = createContext(initValue);

const reducer = (state, action) => {
  switch (action.type) {
    case actions.resetStep:
      return { ...state, steps: allStates.home };
    case actions.updateStep:
      return { ...state, steps: action.payload };
    case actions.updateSearchForm:
      return { ...state, searchForm: action.payload };
    case actions.resetSearchForm:
      return { ...state, searchForm: initValue.searchForm };
    default:
      return state;
  }
};
export function useGlobalReducer() {
  const [state, dispatch] = useReducer(reducer, initValue);
  const globalState = {
    state,
    updateStep: (step) => {
      dispatch({ type: actions.updateStep, payload: step });
    },
    resetStep: (step) => {
      dispatch({ type: actions.resetStep, payload: step });
    },
    updateSearchForm: (search, chain) => {
      dispatch({ type: actions.updateSearchForm, payload: { search, chain } });
    },
  };
  return globalState;
}

export function useGlobalContext() {
  const { state, updateStep, resetStep, updateSearchForm } =
    useContext(GlobalContext);
  return { state, updateStep, resetStep, updateSearchForm };
}
