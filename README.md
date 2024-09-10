
# Ethereum Deposit Tracker

The Ethereum Deposit Tracker is a tool designed to monitor ETH deposits made to the Beacon Chain Deposit Contract. The application utilizes Alchemy’s Ethereum RPC services to fetch deposits in real-time, logs them into a JSON file, and sends alerts through Telegram.

## Folder Structure

Luganodes_Task/
│
├── src/
│   ├── alerts.js               
│   ├── tracker.js              
│   └── abi.js                 
├── .env                         
├── deposits.json                
├── package.json                 
├── package-lock.json            
└── README.md          

## Setup Instructions

###  Clone the Repository

git clone https://github.com/SATVIK297/Luganodes_Task_submission.git
cd Luganodes_Task

##Install Dependencies
   
npm install

##Set Up Environment Variables:

ALCHEMY_API_KEY='VPo7YgqZ16NHDhZKy1e0hiPPwh2Hl1TZ'

TELEGRAM_API_KEY='7093557790:AAF5cK1bGXp8nyRfm_LHEMXmLc8dx4eLbew'

TELEGRAM_CHAT_ID='1318257205


##Start the Deposit Tracker
Execute the following command to start the deposit tracker:

node src/tracker.js

The tracker will start monitoring ETH deposits and send alerts to the specified Telegram chat.

Telegram Bot
Track My Ether Deposit Bot : https://t.me/trackmyehterdepositbot
