const express = require("express");
const app = express();
const path = require("path");
const http = require("http").Server(app);
const port = process.env.PORT || 8080;

//a ttach http server to socket.io
const io = require("socket.io")(http);
//create a new conection
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("a user disconnected");
  });

  socket.on("message", (msg) => {
    console.log("client message:" + msg);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});
http.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
