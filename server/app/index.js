const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 5000;


// Create express app
const app = express();


// Serve static assets
app.use(express.static(path.resolve(__dirname, '../', 'public')));

app.use(require("body-parser").urlencoded({ extended: true }));

// device capture
const device = require('express-device');
app.use(device.capture());


//routes

require("./routes/homeRoutes")(app);
app.get('*', (req, res) => {
  // desktop, tv, tablet, phone, bot or car
  let deviceType = req.device.type.toUpperCase()
  if(deviceType == "PHONE"){
    res.send('<div> Coming soon </div>')
  }else{
    res.sendFile(path.resolve(__dirname, '..', 'public/desktop', 'index.html'));
  }
  
});



// listen to port
app.listen(PORT);
