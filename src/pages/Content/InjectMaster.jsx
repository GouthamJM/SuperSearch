import React from 'react';
import Home from './pages/Home';
import { useMemo } from 'react';
import Transaction from './pages/Transaction';
import { GlobalContext, useGlobalReducer } from './context/globalContext';
import Wallet from './pages/Wallet';

export const allPages = {
  home: 'home',
  transaction: 'transaction',
  wallet: 'wallet',
};

function InjectMaster() {
  const globalState = useGlobalReducer();
  const steps = useMemo(() => {
    switch (globalState.state.steps) {
      case allPages.home:
        return <Home />;
      case allPages.transaction:
        return <Transaction />;
      case allPages.wallet:
        return <Wallet />;
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
