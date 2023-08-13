import React from 'react';
import Home from './pages/Home';
import { useMemo } from 'react';
import Transaction from './pages/Transaction';
import { GlobalContext, useGlobalReducer } from './context/globalContext';
import Wallet from './pages/Wallet';
import Layout from './pages/components/Layout';

import Title from './ui_components/Title';
import Header from './pages/components/Header';

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

  const [accordion, setAccordion] = React.useState(false);

  return (
    <GlobalContext.Provider value={globalState}>
      <div className="homePage">
        <Layout>
          <div className={accordion ? 'pb-4' : ''}>
            <div
              className="d-flex cursorPointer pb-2"
              onClick={() => setAccordion(!accordion)}
            >
              <div className="flex-grow-1">
                <Title />
              </div>
              <div className="flex-grow-2">
                <div className={` ${accordion ? 'rotateImage' : ''}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.25 8.625L12 15.375L18.75 8.625"
                      stroke="white"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              {accordion && (
                <>
                  <div className="pb-2">
                    <Header type="wallet" />
                  </div>
                  {steps}
                </>
              )}
            </div>
          </div>
        </Layout>
      </div>
    </GlobalContext.Provider>
  );
}

export { InjectMaster };
