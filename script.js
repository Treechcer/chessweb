function random(){
    reset()
    for (let i = 1; i < 65; i++){
        if (i % 2 == Math.ceil(Math.random() * 2)-1){
            document.getElementById(i).textContent = String.fromCharCode(Math.floor(Math.random() * (122 - 65 + 1)) + 65);
        }
    }
}

function reset(){
    for (let i = 1; i < 65; i++){
        document.getElementById(i).textContent = "";
    }
}

setInterval(random, 1000)