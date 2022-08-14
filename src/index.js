const dotenv = require('dotenv')

dotenv.config();

const app = require('./app');
const prisma = require('./prisma');
const port = process.env.PORT || 7895;

app.listen(port, async () => {
  try {
    await prisma.$connect();
    console.log(`🚀 Server's listening at: http://localhost:${port}. Connected to the database`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
});