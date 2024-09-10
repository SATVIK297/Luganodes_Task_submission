import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_API_KEY}/sendMessage`;

export async function sendTelegramNotification(message) {
  try {
    await axios.post(telegramApiUrl, {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    });
    console.log('Telegram notification sent:', message);
    return true;
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return false;
  }
}
