let aleatorio = Math.floor(Math.random() * 100);

function randomizar(){
    console.log(aleatorio)
    let num = parseInt(document.getElementById("adivinha").value);
    console.log(num)

    if (num == aleatorio){
        document.getElementById("resultado").innerHTML = "Correto!";
        document.getElementById("resultado").style.setProperty("background-color", "green");
    }

    if (num > aleatorio){
        document.getElementById("resultado").style.setProperty("background-color", "red");
        document.getElementById("resultado").innerHTML = "O número é menor!";
        document.getElementById("tentativas_grandes").innerHTML += `${num},`;

    }

    if (num < aleatorio){
        document.getElementById("resultado").style.setProperty("background-color", "red");
        document.getElementById("resultado").innerHTML = "O número é maior!";
        document.getElementById("tentativas_pequenas").innerHTML += `${num},`;
    }

}