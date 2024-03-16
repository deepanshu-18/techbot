## Techbot
# Description
The Discord Tech News Bot is a Discord bot built using Discord.js that provides technology news specifically for the Indian region in English language. Users can trigger the bot to fetch a random technology news article by typing technews.

# Features
1.Fetches technology news from the News API, filtering for English language articles and focusing on the Indian region.  
2.Responds with a random technology news article upon command.  
3.Simple and easy-to-use interface for fetching technology news within Discord servers.  

# Prerequisites
1. Node.js installed on your machine
2. Client token
3. News API key

# Installation
1.Clone this repository to your local machine.  
2.Install dependencies using npm install.  
3.Create a .env file in the root directory and add your Discord bot token and News API key.  
CLIENT_TOKEN=your_discord_bot_token_here  
NEWS_API_KEY=your_news_api_key_here  
4.Start the bot using node techbot.js.  

## How to generate Client Token

To use this Discord bot, you need to obtain a client token from the Discord Developer Portal. Follow these steps to generate a client token:

1. **Create a Discord Application**:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   - Click on "New Application" and give your application a name.

2. **Create a Bot for the Application**:
   - Once the application is created, navigate to the "Bot" tab.
   - Click on "Add Bot" and confirm the creation.

3. **Get the Bot Token**:
   - Under the bot settings, you'll find the "Token" section.
   - Click on "Copy" to copy the token to your clipboard.

4. **Add the Token to Your Environment Variables**:
   - Create a `.env` file in the root directory of your project.
   - Add the following line to the `.env` file, replacing `YOUR_BOT_TOKEN` with the actual token you copied:
     ```dotenv
     CLIENT_TOKEN=YOUR_BOT_TOKEN
     ```

5. **Use the Token in Your Code**:
   - In your code, retrieve the token from the environment variables and use it to log in to your bot.
   - For example, if you're using Node.js and Discord.js:
     ```javascript
     const { Client } = require('discord.js');
     const client = new Client();
     client.login(process.env.CLIENT_TOKEN);
     ```


*Screenshot showing the Tech News Bot responding with a random technology news article.*


![Screenshot 2024-03-16 123249](https://github.com/deepanshu-18/techbot/assets/130245433/7ea9a35b-87f7-4536-938b-46d927b9856d)
