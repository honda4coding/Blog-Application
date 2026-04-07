const dotenv = require('dotenv');
dotenv.config({ path: './.env' }); 

const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE_URL; 

console.log('Connecting to:', DB); 

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');


  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`); 
});
});
module.exports = app;
