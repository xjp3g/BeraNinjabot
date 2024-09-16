// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { bot } from './bot';  // Import the bot instance

// Use the bot instance to integrate with your mini app
bot.on('message', (ctx) => {
  // Handle incoming messages from the bot
  const messageText = ctx.message.text;
  if (messageText === '/start') {
    // Handle the /start command
    ctx.reply('Welcome to our mini app!');
  } else if (messageText === '/game') {
    // Handle the /game command
    ctx.reply('Let\'s play a game!');
    // Update the state or render a new component to start the game
  }
});

// Send a message from the mini app to the bot
const sendMessageToBot = (message) => {
  bot.telegram.sendMessage(chatId, message);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
