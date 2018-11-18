const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 5000;


// Create express app
const app = express();


// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(require("body-parser").urlencoded({ extended: true }));

//routes

require("./routes/homeRoutes")(app);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});



// listen to port
app.listen(PORT);
