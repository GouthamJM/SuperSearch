import React from 'react';
import Input from '../../ui_components/Input';
import { ButtonP } from '../../ui_components/Button';
import { useGlobalContext } from '../../context/globalContext';
import { allPages } from '../../InjectMaster';
import ChainDropdown from '../../ui_components/ChainDropdown';
import { getSearchType, searchTypes } from '../../utils';

export default function Header() {
  const { updateStep, updateSearchForm, state } = useGlobalContext();

  const [chain, setChain] = React.useState(state.searchForm.chain);
  const [search, setSearch] = React.useState(state.searchForm.search);

  const onStateSubmit = () => {
    const searchType = getSearchType(search);
    updateSearchForm(search, chain, searchType);
    if (searchType === searchTypes.address) {
      updateStep(allPages.wallet);
    } else if (searchType === searchTypes.transactionHash) {
      updateStep(allPages.transaction);
    }
  };

  return (
    <div className="pb-3">
      <div className="d-flex align-items-center pb-4 gap-3">
        <div className="flex-grow-1">
          <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex-grow-2">
          <ChainDropdown
            value={chain.name}
            onChange={(item) => {
              setChain(item);
            }}
          />
        </div>
      </div>
      <div>
        <ButtonP onClick={onStateSubmit}>Search</ButtonP>
      </div>
    </div>
  );
}
