export const UniRouterV3Abi = [
  'constructor(address,address)',
  'function WETH9() view returns (address)',
  'function exactInput((bytes,address,uint256,uint256,uint256)) payable returns (uint256)',
  'function exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160)) payable returns (uint256)',
  'function exactOutput((bytes,address,uint256,uint256,uint256)) payable returns (uint256)',
  'function exactOutputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160)) payable returns (uint256)',
  'function factory() view returns (address)',
  'function multicall(bytes[]) payable returns (bytes[])',
  'function refundETH() payable',
  'function selfPermit(address,uint256,uint256,uint8,bytes32,bytes32) payable',
  'function selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32) payable',
  'function selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32) payable',
  'function selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32) payable',
  'function sweepToken(address,uint256,address) payable',
  'function sweepTokenWithFee(address,uint256,address,uint256,address) payable',
  'function uniswapV3SwapCallback(int256,int256,bytes)',
  'function unwrapWETH9(uint256,address) payable',
  'function unwrapWETH9WithFee(uint256,address,uint256,address) payable',
  'receive() payable',
];
