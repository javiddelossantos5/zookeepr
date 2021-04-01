const express = require('express');

const PORT = process.env.PORT || 3001;
// telling the file its using express
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
//links script and link
app.use(express.static('public'));

//Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//tells you your personal port is made in port 3001
app.listen(PORT, () => {
    console.log(`API server on port ${PORT}!`);
});
