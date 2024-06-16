let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function quadrado(x, y, largura, comprimento, cor){
    ctx.beginPath(); //abre
    ctx.fillStyle = cor; //cor do quadrado
    ctx.fillRect(x,y,largura,comprimento);// coordenadas x e y + altura e largura (da forma)
    ctx.closePath(); //fecha
}
quadrado (0, 0, 50, 50, "blue")
quadrado (250, 0, 50, 50, 'red')
quadrado (0, 240, 30, 60, "yellow")
quadrado (0, 270, 60, 30, "yellow")
quadrado (270, 240, 30, 60, "black")
quadrado (240, 270, 60, 30, "black")
quadrado (0, 120, 30, 60, "cyan")
quadrado (270, 135, 40, 30, "cyan")
quadrado (110, 150, 40, 40, 'red')

function desenhar_linha (larg, cor, x0, y0, x1, y1){
    ctx.beginPath();
    ctx.lineWidth = larg;
    ctx.strokeStyle = cor;
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.stroke();
    ctx.closePath();

}
desenhar_linha(2, "blue", 0, 0, 150, 150);
desenhar_linha(2, "red", 300, 0, 150, 150);
desenhar_linha(2, "green", 0, 150, 300, 150);
desenhar_linha(2, "black", 150, 150, 150, 260);

function desenhar_arco(larglin, corlin, cortudo, x, y, r, pi1, pi2){
    ctx.beginPath();
    ctx.lineWidth = larglin;
    ctx.strokeStyle = corlin;
    ctx.fillStyle = cortudo;
    ctx.arc(x,y,r,pi1,pi2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
desenhar_arco (2, "blue", "cyan", 150, 110, 15, 0, 2*Math.PI);
desenhar_arco (2, "green", "cyan", 150, 300, 40, Math.PI, 2*Math.PI);
desenhar_arco (2, "green", "yellow", 70, 220, 14, 0, 2*Math.PI);
desenhar_arco (2, "green", "yellow", 230, 220, 14, 0, 2*Math.PI);

function desenhar_arco2 (larglin, corlin, x, y, r, pi1, pi2){
    ctx.beginPath();
    ctx.lineWidth = larglin;
    ctx.strokeStyle = corlin;
    ctx.arc(x,y,r,pi1,pi2);
    ctx.stroke();
    ctx.closePath();
}
desenhar_arco2 (2, "green", 150, 150, 65, Math.PI, 2*Math.PI);
desenhar_arco2 (2, "green", 150,150,90,Math.PI,1.25*Math.PI);
desenhar_arco2 (2, "green", 150,150,90,Math.PI/-4,0);
desenhar_arco2 (2, "green", 150, 300, 80, Math.PI, Math.PI/-2)
desenhar_arco2 (2, "green", 150, 300, 60, Math.PI/-2,Math.PI )


function escrever (corTudo, family, texto, h, l){
    ctx.beginPath();
    ctx.fillStyle = corTudo;
    ctx.font = family;
    ctx.fillText(texto, h, l);
    ctx.closePath();

}
escrever ("black", "20px Arial", "Canvas", 115, 50)
