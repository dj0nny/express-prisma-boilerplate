const dotenv = require('dotenv')

dotenv.config();

const app = require('./app');
const port = process.env.PORT || 7895;

app.listen(port, () => {
  try {
    console.log(`🚀 Server's listening at: http://localhost:${port}`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
});