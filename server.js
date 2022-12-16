
const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

app.set('view-engine', 'ejs')

var con = mysql.createConnection({
    host: "containers-us-west-155.railway.app",
    user: "root",
    password: "6Ld3S1lwE0F6OhC0wOcw",
    database: "railway",
    port: 7792
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.get('/', (req, res) => {
    res.render('index.ejs')
    con.query("SELECT * FROM elo", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        //console.log(result.RowDataPacket[0]);
        console.log(result[0].id);
      });
})

app.get('/plany', (req, res) => {
    res.render('plany.ejs')
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
