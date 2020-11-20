const axios = require('axios');
const webhookUrl = process.env.webhookUrl

module.exports = {
  async rebuild(ctx) {
    await axios.post(webhookUrl);
  }
}
