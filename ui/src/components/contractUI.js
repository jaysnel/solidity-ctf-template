import React, { useEffect } from 'react'
import contractAbi from '../utils/contractAbi.json'

export default function ContractUI() {
    const targetAddress = '';
    const { ethers} = require('ethers');
    const network = 'sepolia';
    console.log('ethers: ', ethers)
    const getContractData = async () => {
        try {
            const { ethereum } = window;
            if(ethereum) {
                // const provider = new ethers.JsonRpcProvider(ethereum);
                const provider = new ethers.providers.Web3Provider(ethereum)
                await provider.send("eth_requestAccounts", []);
                // console.log('provider: ', provider)
                const signer = provider.getSigner();
                // console.log('signer: ', signer);
                const contract = new ethers.Contract(targetAddress, contractAbi, signer);
                // console.log('Contract: ', contract);
            }
        } catch(err) {
            console.log("Request Failed: ", err.message);
        }
    }

    useEffect(() => {
        getContractData();
    }, [])

  return (
    <div>
        <h1>CONTRACT UI</h1>
    </div>
  )
}
