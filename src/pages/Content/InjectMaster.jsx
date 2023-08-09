import React from 'react';
import Home from './Pages/Home';
import { useMemo } from 'react';
import Transaction from './Pages/Transaction';
import { GlobalContext, useGlobalReducer } from './context/globalContext';

export const allStates = {
  home: 'home',
  transaction: 'transaction',
};

function InjectMaster() {
  const globalState = useGlobalReducer();
  const steps = useMemo(() => {
    switch (globalState.state.steps) {
      case allStates.home:
        return <Home />;
      case allStates.transaction:
        return <Transaction />;
      default:
        return <Home />;
    }
  }, [globalState.state.steps]);
  return (
    <GlobalContext.Provider value={globalState}>
      <div className="homePage">{steps}</div>
    </GlobalContext.Provider>
  );
}

export { InjectMaster };
