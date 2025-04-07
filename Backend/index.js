const express = require('express')
const app = express()
const port = 5000
const connectToMongo=require("./db")
var cors=require('cors');

app.use(cors());

connectToMongo();
app.use(express.json());

app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/DisplayData'));
app.use('/api',require('./Routes/orderData'));


app.listen(port, () => {
  console.log(`Example: app listening on port ${port}`)
})

