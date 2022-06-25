const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURI)
const {connection: db} = mongoose;

db.on('connected', () => {
  console.log('Db Connected')
});

db.on('disconnected', () => {
  console.log('DB disconnected');
});

db.on('error', (err) => {
  console.log('Error occurred when connecting to DB:', err);
});

module.exports = db;