import { ethers } from 'ethers';
import fs from 'fs';
import { sendTelegramNotification } from './alerts.js';
import { contractABI } from './abi.js';
import dotenv from 'dotenv';

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`);

const depositContractAddress = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

const depositContract = new ethers.Contract(depositContractAddress, contractABI, provider);

async function logDepositData(depositData) {
  const { pubkey, withdrawal_credentials, amount, signature, index } = depositData;

  const depositDetails = {
    pubkey: ethers.utils.hexlify(pubkey),
    withdrawal_credentials: ethers.utils.hexlify(withdrawal_credentials),
    amount: ethers.utils.formatUnits(amount, 9), // Convert amount to ETH denomination
    signature: ethers.utils.hexlify(signature),
    index: ethers.utils.formatBytes32String(index),
    timestamp: new Date().toISOString()
  };

  console.log('New Deposit Detected:', depositDetails);

  await sendTelegramNotification(`New Deposit Detected: ${JSON.stringify(depositDetails)}`);

  fs.appendFileSync('deposits.json', JSON.stringify(depositDetails) + ',\n', 'utf-8');
}

function trackDeposits() {
  depositContract.on('DepositEvent', (pubkey, withdrawal_credentials, amount, signature, index, event) => {
    logDepositData({ pubkey, withdrawal_credentials, amount, signature, index });
  });
}

// Start tracking deposits
trackDeposits();
