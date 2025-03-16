var board = [
    ["white rook","white knight","white bishop","white queen","white king","white bishop","white knight","white rook"],
    ["white pawn","white pawn","white pawn","white pawn","white pawn","white pawn","white pawn","white pawn"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["black pawn","black pawn","black pawn","black pawn","black pawn","black pawn","black pawn","black pawn"],
    ["black rook","black knight","black bishop","black queen","black king","black bishop","black knight","black rook"]
]

var whitePieces = [
    "white pawn", "white rook",
    "white knight", "white bishop",
    "white queen", "white king",
]

var blackPieces = [
    "black pawn", "black rook",
    "black knight", "black bishop",
    "black queen", "black king",
]

function boardDraw(){
    reset()
    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            let ID = i * 8 + j + 1; 
            document.getElementById(ID).textContent = board[i][j]
            document.getElementById(ID).style.color = checkTeam(board[i][j])
        }
    }
}

function checkTeam(piece){
    for (var item of whitePieces) {
        if (piece == item){
            return "red"
        }
    }

    for (var item of blackPieces) {
        if (piece == item){
            return "blue"
        }
    }
}

function reset(){
    for (let i = 1; i < 65; i++){
        document.getElementById(i).textContent = "";
    }
}

boardDraw()