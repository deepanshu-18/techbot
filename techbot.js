const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
require('dotenv').config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Function to fetch technology news
async function getTechNews() {
    const apiKey = process.env.NEWS_API_KEY; // Your News API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=${apiKey}`;
    
    try {
        const response = await axios.get(apiUrl);
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching technology news:', error);
        return null;
    }
}

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'technews') {
        const techNews = await getTechNews();
        if (techNews) {
            const randomIndex = Math.floor(Math.random() * techNews.length);
            const randomArticle = techNews[randomIndex];
            message.reply({
                content: `**${randomArticle.title}**\n${randomArticle.description}\nRead more: ${randomArticle.url}`
            });
        } else {
            message.reply({ content: "Sorry, couldn't fetch technology news at the moment." });
        }
    }
});

// Replace YOUR_BOT_TOKEN with your actual bot token
client.login(process.env.CLIENT_TOKEN)
.then(() => {
    console.log('Logged in successfully!');
  })
  .catch(error => {
    console.error('Error logging in:', error);
  });
