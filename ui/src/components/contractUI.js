import React, { useEffect } from 'react'
import contractAbi from '../utils/contractAbi.json'

export default function ContractUI() {
    const targetAddress = '0x39588a02aD9A2A302323D6aAC054C0E610E8775F';
    const { ethers} = require('ethers');
    console.log('ethers.js: ', ethers);
    const getContractData = async () => {
        try {
            const { ethereum } = window;
            if(ethereum) {
                const provider = new ethers.JsonRpcProvider(ethereum);
                await provider.send("eth_requestAccounts", []);
                console.log('provider: ', provider)
                // const signer = await provider.getSigner();
                // const contract = new ethers.Contract(targetAddress, contractAbi, signer);
                // console.log('Contract: ', contract);
            }
        } catch(err) {
            console.log("FAILURE: ", err.message);
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
