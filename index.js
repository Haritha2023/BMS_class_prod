const express = require("express");
var cors = require("cors");
const path = require('path')
require("dotenv").config();

const dbConfig = require("./config/dbConfig");

const PORT = 8088;

const app = express();

const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const theatreRoutes = require("./routes/theatreRoutes");
const showRoutes = require("./routes/showRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/theatres", theatreRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/bookings", bookingRoutes);

console.log(path)
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "public")));

// Handle client-side routing, return all other requests to `index.html`
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("server running");
});
