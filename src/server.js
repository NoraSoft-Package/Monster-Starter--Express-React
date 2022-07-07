const app = require("./app");
const http = require("http");

// server port
const PORT = 5000;

// mongos connection

// require mongoose
const mongoose = require("mongoose");

mongoose
  // in your link:
  //  delete <password> and replace it by the database password
  //  put your database name between [.net/] db name  [?]
  .connect("put_your_link")
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
