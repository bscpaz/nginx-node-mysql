const express = require('express');
const app = express();
const port = 4200;

const users = [
    {name: "Bruno Paz"},
    {name: "Jack Bauer"},
    {name: "Teri Bauer"},
    {name: "Nina Myers"},
    {name: "Kim Bauer"},
    {name: "David Palmer"},
    {name: "Tony Almeida"},
    {name: "Sherry Palmer"},
    {name: "George Mason"},
    {name: "Milo Pressman"},
    {name: "Kate Warner"},
    {name: "Michelle Dessler"},
    {name: "Chase Edmunds"},
    {name: "Chloe O'Brian"},
    {name: "Wayne Palmer"},
    {name: "Audrey Raines"},
    {name: "Erin Driscoll"},
    {name: "Sarah Gavin"},
    {name: "Curtis Manning"},
    {name: "James Heller"},
    {name: "Bill Buchanan"},
    {name: "Charles Logan"},
    {name: "Edgar Stiles"},
    {name: "Martha Logan"},
    {name: "Morris O'Brian"},
    {name: "Karen Hayes"},
    {name: "Tom Lennox"},
    {name: "Nadia Yassir"},
    {name: "Sandra Palmer"},
    {name: "Ethan Kanin"},
    {name: "Allison Taylor"},
    {name: "Henry Taylor"},
    {name: "Renee Walker"},
    {name: "Larry Moss"},
    {name: "Sean Hillinger"},
    {name: "Janis Gold"},
    {name: "Omar Hassan"},
    {name: "Brian Hastings"},
    {name: "Dana Walsh"},
    {name: "Rob Weiss"},
    {name: "Arlo Glass"},
    {name: "Cole Ortiz"},
    {name: "Kate Morgan"},
    {name: "Mark Boudreau"},
    {name: "Erik Ritter"},
    {name: "Jordan Reed"},
    {name: "Adrian Cross"},
    {name: "Steve Navarro"},
    {name: "Eric Carter"},
    {name: "Rebecca Ingram"},
    {name: "Nicole Carter"},
    {name: "Keith Mullins"},
    {name: "Isaac Carter"},
    {name: "Andy Shalowitz"},
    {name: "Mariana Stiles"},
    {name: "Ben Grimes"},
    {name: "Nilaa Mizrani"},
    {name: "Jadalla bin-Khalid"},
    {name: "Henry Donovan"}
];

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'db'
}

const mysql = require('mysql');

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config);

    //Select a random user
    const random =  Math.floor(Math.random() * users.length);
    const randomUser = users[random];
    
    //Insert a random user
    let sqlStmt = `INSERT INTO tb_users (nm_user) VALUES ('${randomUser.name}')`;
    connection.query(sqlStmt);

    sqlStmt = `SELECT nm_user FROM tb_users ORDER BY nm_user`;
    connection.query(sqlStmt, (err, results) => {
        if (err) { 
          throw err;
        }

        //Show the results.
        let table = `<table border="1">`;
        results.forEach(element => {
            table += `<tr><td>${element.nm_user}</td></tr>`    
        });
        table += `</table>`;

        res.send(`<!DOCTYPE html><html lang="en"><body><h1>FullCycle!</h1><hr>${table}</body></html>`);
    });

    connection.end();    
});

app.listen(port, () => {
    console.log('Running at `$port`');
});

