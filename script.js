for (let i = 1; i < 65; i++){
    if (i % 2 == Math.ceil(Math.random() * 2)-1){
        document.getElementById(i).textContent = "a";
    }
}