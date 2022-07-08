/**
 * the app file is the main app that contains a:
 * routes
 * middleware
 * express require
 * the whole app will be there because this is the app file like in the React App file
 */
const app = require("./app");

// required http to create a new server
const http = require("http");

// DB settings
/**
 * in your link:
 *  delete <password> and replace it by the database password
 *  put your database name between [.net/] db name  [?]
 */
const db_link = "put_your_link";

// server port
const PORT = process.env.PORT || 5000;

// mongos connection

// require mongoose database
const mongoose = require("mongoose");

mongoose
  .connect(db_link)
  .then((result) => {
    // we use create server function from http
    // because this method is better for sockets and real time messages and so on
    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// end mongos connection
