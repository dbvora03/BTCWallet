const express = require("express")
const axios = require("axios")
const mongoose = require("mongoose")

require('dotenv').config()

const app = express()
const PORT = 3001



// Connecting MongoDB
mongoose.connect(
  process.env.MONGOURI, 
  { useNewUrlParser: true,
  useUnifiedTopology: true
   }).then(()=> {
  console.log('MongoDB Connected')
}).catch((err)=> {
  console.log(err)
})

app.use(express.json())


require("./models/user")


app.use(require("./routes/authentication"))

axios.get('https://blockchain.info/stats?format-json').then((error, response, body) => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });


app.listen(PORT, ()=> {
    console.log(`Your port is running on port ${PORT}`)
})