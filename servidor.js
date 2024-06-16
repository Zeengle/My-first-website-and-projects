var colors = require("colors")
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set("view engine", "ejs");
app.set("views", "./views");

var server = http.createServer(app);
server.listen(80);

console.log("servidor esta online...".rainbow)

app.get("/", function(requisicao, resposta){
    resposta.redirect("/home/project.html");
})

let senha;
let login;
app.post("/cadastra", function(requisicao, resposta){
    login = requisicao.body.login;
    senha = requisicao.body.senha;
    resposta.redirect("/project_5/login.html");
})

app.post("/login", function(requisicao, resposta){
    let login1 = requisicao.body.login;
    let senha1 = requisicao.body.senha;
    if (login1 == login && senha1 == senha){
        mensagem = "Sucesso ao logar"
    } else{
        mensagem = "Erro ao logar"
    }
    resposta.render("resposta.ejs", {login1, senha1, mensagem});
})


const MongoClient = mongodb.MongoClient;
const uri = //insert here your MongoDB URI;
const client = new MongoClient(uri, { useNewUrlParser: true });


app.post('/criar_post', function(request, response){
    client.db("BC1").collection("post").insertOne(
        { db_titulo: request.body.titulo, 
            db_resumo: request.body.resumo, 
            db_conteudo: request.body.conteudo 
        }, 
        function (err) {
            response.redirect('/init');
        }
    );
});

app.get('/init', function(req, res) {
    client.db("BC1").collection("post").find({}).toArray(function(err, items) {
        console.log(items);
        res.render('Blog', {posted: items});
    });
});


app.post("/criarblog", function(request, response) {
    response.redirect("formulario.html");
});

