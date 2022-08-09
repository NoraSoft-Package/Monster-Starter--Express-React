// required http to create a new server
const https = require("https");
const fs = require("fs");

// for .env file
let dotenv = require("dotenv");
dotenv.config();

// must require the app file after requiring dotenv and configure it
const app = require("./src/app");

// DB settings
/**
 * in your link:
 *  delete <password> and replace it by the database password
 *  put your database name between [.net/] db name  [?]
 * DB_URL in the .env file please put your db link there
 */
const DB_URL = process.env.DB_URL;

// server port
const PORT = process.env.PORT || 5000;

// mongos connection

// require mongoose database
const mongoose = require("mongoose");

mongoose
  .connect(DB_URL)
  .then((result) => {
    // the server options
    // for more explain => https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/learn/lecture/26612264#overview
    const options = {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    };

    // we use create server function from https
    // because this method is better for sockets and real time messages and so on
    // for more explain => https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/learn/lecture/26612264#overview
    const server = https.createServer(options, app);

    server.listen(PORT, () => {
      console.log(`Server running on https://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// end mongos connection
