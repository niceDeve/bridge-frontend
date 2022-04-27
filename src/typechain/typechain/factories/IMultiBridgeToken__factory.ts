/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IMultiBridgeToken, IMultiBridgeTokenInterface } from "../IMultiBridgeToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridge",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cap",
        type: "uint256",
      },
    ],
    name: "updateBridgeSupplyCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMultiBridgeToken__factory {
  static readonly abi = _abi;
  static createInterface(): IMultiBridgeTokenInterface {
    return new utils.Interface(_abi) as IMultiBridgeTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMultiBridgeToken {
    return new Contract(address, _abi, signerOrProvider) as IMultiBridgeToken;
  }
}