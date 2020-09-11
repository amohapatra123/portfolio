const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const contact = require("./routes/contact");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.use("/api", contact);
app.get("/api", (req, res) => {
  res.send("Hello");
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
