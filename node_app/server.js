const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
const APP_ENV = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
    res.send(`<h1>Hello from my custom Node.js Docker image v2.0!</h1><p>Environment: ${APP_ENV} | Port: ${PORT}</p>`);
});

app.get("/about", (req, res) => {
    res.send(`<h2>This is Express app v2.0 running in Docker on port ${PORT} [Mode: ${APP_ENV}]</h2>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
