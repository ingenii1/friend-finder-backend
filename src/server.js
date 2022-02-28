require("./db/connection");
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001
// const port = 5001;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=> res.send('Deployed successfully') )


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})