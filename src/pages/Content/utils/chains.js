const CHAIN_DATA = {
  ETHEREUM: {
    name: 'eth-mainnet',
    chain_id: '1',
    is_testnet: false,
    db_schema_name: 'chain_eth_mainnet',
    label: 'Ethereum',
    category_label: 'Ethereum',
    logo_url: 'https://www.datocms-assets.com/86369/1669653891-eth.svg',
    black_logo_url:
      'https://www.datocms-assets.com/86369/1669619544-ethereum.png',
    white_logo_url:
      'https://www.datocms-assets.com/86369/1669619533-ethereum.png',
    is_appchain: false,
    appchain_of: null,
    rpc: 'https://eth.llamarpc.com',
  },
  POLYGON: {
    name: 'matic-mainnet',
    chain_id: '137',
    is_testnet: false,
    db_schema_name: 'chain_matic_mainnet',
    label: 'Polygon',
    category_label: 'Polygon',
    logo_url:
      'https://www.datocms-assets.com/86369/1677870347-property-1-polygon-zkevm-icon-white.svg',
    black_logo_url:
      'https://www.datocms-assets.com/86369/1677870457-property-1-polygon-white.png',
    white_logo_url:
      'https://www.datocms-assets.com/86369/1677870452-property-1-polygon-colour.png',
    is_appchain: false,
    appchain_of: null,
    rpc: 'https://polygon.llamarpc.com',
  },
  OPTIMISM: {
    name: 'optimism-mainnet',
    chain_id: '10',
    is_testnet: false,
    db_schema_name: 'chain_optimism_mainnet',
    label: 'Optimism',
    category_label: 'Optimism',
    logo_url:
      'https://www.datocms-assets.com/86369/1670347457-optimism-icon-white.svg',
    black_logo_url:
      'https://www.datocms-assets.com/86369/1670347467-optimisim-white.png',
    white_logo_url:
      'https://www.datocms-assets.com/86369/1670347461-optimisim-colour.png',
    is_appchain: false,
    appchain_of: null,
    rpc: 'https://mainnet.optimism.io',
  },
  BASE: {
    name: 'base-mainnet',
    chain_id: '8453',
    is_testnet: false,
    db_schema_name: 'chain_base_mainnet',
    label: 'Base',
    category_label: 'Coinbase',
    logo_url:
      'https://www.datocms-assets.com/86369/1677538323-property-1-base-icon-white.svg',
    black_logo_url:
      'https://www.datocms-assets.com/86369/1677538328-property-1-base-white.png',
    white_logo_url:
      'https://www.datocms-assets.com/86369/1677538326-base-colour.png',
    is_appchain: false,
    appchain_of: null,
    rpc: 'https://mainnet.base.org',
  },
  ZORA: {
    name: 'zora-mainnet',
    chain_id: '7777777',
    is_testnet: false,
    db_schema_name: 'chain_zora_mainnet',
    label: 'Zora',
    category_label: 'ZORA',
    logo_url:
      'https://www.datocms-assets.com/86369/1687802329-zora-icon-white.svg',
    black_logo_url:
      'https://www.datocms-assets.com/86369/1687802340-zora-white.png',
    white_logo_url:
      'https://www.datocms-assets.com/86369/1687802336-zora-colour.png',
    is_appchain: false,
    appchain_of: null,
    rpc: 'https://rpc.zora.energy',
  },
};

class Chains {
  getAllChainsData = () => {
    return [
      CHAIN_DATA.ETHEREUM,
      CHAIN_DATA.POLYGON,
      CHAIN_DATA.OPTIMISM,
      CHAIN_DATA.BASE,
      CHAIN_DATA.ZORA,
    ];
  };
}

const chainServices = new Chains();

export { chainServices };
