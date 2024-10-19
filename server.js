const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const app = express();


mongoose.connect('mongodb://localhost:27017/ProductProject', {
    useNewUrlParser: true ,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())





app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});

require('./app/routes/prodRoute.js')(app);
 require('./app/routes/commandRoute.js')(app)

let PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


