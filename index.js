const express = require("express");
const app = express();
const newsRouter = require("./src/routes/news");
const PORT = process.env.PORT;

// Static Files
app.use(express.static("public"));

// Template Engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Configurations
app.use(express.json());

// Routes
app.use("/", newsRouter);

// Server Port
app.listen(PORT, console.log(`server running on http://localhost:${PORT}`));
