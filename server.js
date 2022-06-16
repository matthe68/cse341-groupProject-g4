const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const professionalRoutes = require('./routes/professional');
const mongodb = require('./db/connect');

app.use(cors({
    origin: '*'
}));

app.use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
}); 