const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = client.db("myapp")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/:name', (req, res) => {
    try {
        let name = req.params.name
        let query = {
            "score" : {$gte : 80}
        }
        db.collection('users').find(query).toArray()
        .then( data =>{
            res.json({ message: 'Dom >!!!!!!!!', data: data});
        })
    } catch (err) {
        res.json({ message: 'Dom >!!!!!!!!', data: "err"});
    }
});
app.post("/insert",(req,res)=>{
    let fname = req.body.fname
    let lname = req.body.lname
    let score = req.body.score
    let query = {fname,lname,score}
    try{
        db.collection('users').insertOne(query).then(result =>{
            if(result.acknowledged){
                res.json({ message: 'Dom >!!!!!!!!', data: "inserted"});
            }else{
                console.log(result)
            }
        })
    }catch(err){
        res.json({ message: 'Dom >!!!!!!!!', data: "err"});
    }
})

app.listen(9000, () => {
    console.log('Application is running on port 9000');
});