import React from 'react';
import Input from '../../ui_components/Input';
import { ButtonP } from '../../ui_components/Button';
import { useGlobalContext } from '../../context/globalContext';
import ChainDropdown from '../../ui_components/ChainDropdown';
import { useEffect } from 'react';

export default function Header() {
  const { state, updatePageDetail, updateError } = useGlobalContext();

  const [chain, setChain] = React.useState(state.searchForm.chain);
  const [search, setSearch] = React.useState(state.searchForm.search);

  const onStateSubmit = () => {
    updatePageDetail(search, chain);
  };

  useEffect(() => {
    setSearch(state.searchForm.search);
  }, [state.searchForm.search]);

  return (
    <div className="ss-pb-3">
      <div className="homeSearchHeader">
        <div className="homeInput">
          <Input
            value={search}
            onChange={(e) => {
              updateError('');
              setSearch(e.target.value);
            }}
          />
        </div>
        <div>
          <ChainDropdown
            value={chain.name}
            onChange={(item) => {
              updateError('');
              setChain(item);
            }}
          />
        </div>
      </div>
      <div>
        <ButtonP onClick={onStateSubmit}>
          {state.apiLoader ? (
            <>
              Loading
              <img
                alt="loading"
                className="loadingImage"
                src={
                  'https://s3-alpha-sig.figma.com/img/67ce/f0ec/5361073ef5fcfb51079c35ccd05380bf?Expires=1692576000&Signature=IKBLMiKTm8M6Jzi2pB9krlPLFSDZy7C9pVSW6tqphe~n8ODdo4SaI1-kUThfmjXPQJWfnR3jP93U29K~Q1AIkTgvBLFlu2aXe6fmh93Ydp1smT798Ta-ptsaOPgBBvrefweUUQXwdciAxB1yckMxX8ey6fXODsHBi5OHbHURyMLpbEwkhPXiBK~PeIcGOQ9XuABYJu1unK3g3T~vy5Tx0ov-5L68o6kVko7Lp7KqlgaMKDY4MYf554wfywyCkaSO4x5HZqCZ72ONugWOIv~iWzw~LDi6zOQhwd57UZWVD9eCKULZ6ZfQr6SRnzsMZSGOyAeWR~e2AvOV~~C9Dmqc8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                }
              />
            </>
          ) : (
            <>Search</>
          )}
        </ButtonP>
      </div>
    </div>
  );
}
