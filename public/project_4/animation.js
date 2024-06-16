let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let quadrado = {
    x: 0,
    y: 0,
    largura: 60,
    altura: 60,
    cor_tudo: "red",
    cor_linha: "red",
    desenhar:function(){
        ctx.beginPath();
        ctx.strokeStyle = this.cor_linha;
        ctx.fillStyle = this.cor_tudo;
        ctx.fillRect(this.x,this.y,this.altura,this.largura);
        ctx.strokeRect(this.x,this.y,this.altura,this.largura);
        ctx.closePath();
    }

}

function animacao(){ 
    ctx.clearRect(0,0,300,300);
    quadrado.desenhar();  
    requestAnimationFrame(animacao);
}

animacao();
document.addEventListener("mousemove", function(evento){
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;
    // console.log(x_mouse, y_mouse);
    
    quadrado.y= y_mouse/1.25;
    quadrado.x = x_mouse/1.25;

    if (y_mouse < 0){
        quadrado.y = 0;
    }
    if (x_mouse < 0){
        quadrado.x = 0;
    }
    if (x_mouse >= 300){
        quadrado.x = 240;
    }
    if(y_mouse >= 300){
        quadrado.y = 240;
    }
});