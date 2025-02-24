import { ContractConfig, defineConfig } from '@wagmi/cli';
import { actions, react } from '@wagmi/cli/plugins';
import {
  algebraFactoryABI,
  algebraPoolABI,
  algebraPositionManagerABI,
  algebraQuoterABI,
  algebraBasePluginABI,
  algebraRouterABI,
  algebraQuoterV2ABI,
  algebraEternalFarmingABI,
  farmingCenterABI,
  wNativeABI,
  algebraVirtualPoolABI,
} from './src/abis';
import { Address } from 'viem';

const ADDRESSES: { [key: string]: Address } = {
  FACTORY: '0xA0864cCA6E114013AB0e27cbd5B6f4c8947da766',
  QUOTER: '0xcBaD9FDf0D2814659Eb26f600EFDeAF005Eda0F7',
  POSITION_MANAGER: '0x91fD594c46D8B01E62dBDeBed2401dde01817834',
  ROUTER: '0xfFB643E73f280B97809A8b41f7232AB401a04ee1',
  ETERNAL_FARMING: '0x607BbfD4CEbd869AaD04331F8a2AD0C3C396674b',
  FARMING_CENTER: '0xDe51dDF1aE7d5BBD7bF1A0e40aAA1F6C12579106',
};

const contracts: ContractConfig[] = [
  {
    address: ADDRESSES.FACTORY,
    abi: algebraFactoryABI,
    name: 'AlgebraFactory',
  },
  {
    abi: algebraPoolABI,
    name: 'AlgebraPool',
  },
  {
    abi: algebraBasePluginABI,
    name: 'AlgebraBasePlugin',
  },
  {
    address: ADDRESSES.POSITION_MANAGER,
    abi: algebraPositionManagerABI,
    name: 'AlgebraPositionManager',
  },
  {
    address: ADDRESSES.QUOTER,
    abi: algebraQuoterABI,
    name: 'AlgebraQuoter',
  },
  {
    address: ADDRESSES.QUOTER,
    abi: algebraQuoterV2ABI,
    name: 'AlgerbaQuoterV2',
  },
  {
    address: ADDRESSES.ROUTER,
    abi: algebraRouterABI,
    name: 'AlgebraRouter',
  },
  {
    address: ADDRESSES.ETERNAL_FARMING,
    abi: algebraEternalFarmingABI,
    name: 'AlgebraEternalFarming',
  },
  {
    address: ADDRESSES.FARMING_CENTER,
    abi: farmingCenterABI,
    name: 'FarmingCenter',
  },
  {
    abi: algebraVirtualPoolABI,
    name: 'AlgebraVirtualPool',
  },
  {
    abi: wNativeABI,
    name: 'WrappedNative',
  },
];

export default defineConfig({
  out: 'src/generated.ts',
  contracts,
  plugins: [
    actions({
      watchContractEvent: false,
    }),
    react({
      useContractEvent: false,
      useContractItemEvent: false,
    }),
  ],
});
