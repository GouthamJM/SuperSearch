import { useContext } from 'react';
import { createContext, useReducer } from 'react';

export const allStates = {
  home: 'home',
  transaction: 'transaction',
};
const initValue = {
  steps: allStates.home,
};

const actions = {
  resetStep: 'resetStep',
  updateStep: 'updateStep',
};
export const GlobalContext = createContext(initValue);

const reducer = (state, action) => {
  switch (action.type) {
    case actions.resetStep:
      return { ...state, steps: allStates.home };
    case actions.updateStep:
      return { ...state, steps: action.payload };
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
  };
  return globalState;
}

export function useGlobalContext() {
  const { state, updateStep, resetStep } = useContext(GlobalContext);
  console.log(state, updateStep, resetStep, 'state, updateStep, resetStep');
  return { state, updateStep, resetStep };
}
