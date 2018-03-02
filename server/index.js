var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var jogadores = {};

io.on("connection", function(client){
    client.on("registrar", function(data){
        data = JSON.parse(data);
        jogadores[client.id] = client;

        console.log("O jogador " + data.name + " acabou de se conectar");

        client.emit("registrado", "voce se registrou para jogar");
        client.broadcast.emit("novoJogador", "O jogador " + data.name + " acabou de se conectar")

        if(validaSeTodosOsJogadoresEstãoConectados()){
            client.broadcast.emit("iniciarPartida", "A partida deve ser iniciada");
        }
    });

    client.on("enviarBarcos", function(data){
        if(jogadores[client.id].barcosPosicionados == null){
            
        }
    })
});

function validaSeTodosOsJogadoresEstãoConectados(){
    
}