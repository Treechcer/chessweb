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

var noColPieces = [
    "pawn", "rook", "knight",
    "bishop", "queen", "king"
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

function movePieces(ID){
    let i = Math.floor((ID - 1) / 8);
    let j = (ID - 1) % 8;
    //document.writeln(checkValidPiece(board[i][j]).team, " ", checkValidPiece(board[i][j]).piece, " ", checkValidPiece(board[i][j]).found)
    let objOfClickedPiece = checkValidPiece(board[i][j])
    document.writeln(coloredPieceToNocoloredPiece(objOfClickedPiece.piece))

}

function checkValidPiece(piece){
    for (var item of whitePieces) {
        if (piece == item){
            return {found: true, piece: piece, team: "white"}
        }
    }

    for (var item of blackPieces) {
        if (piece == item){
            return {found: true, piece: piece, team: "black"}
        }
    }

    return {found: false, piece: NaN, team: NaN}
}

function coloredPieceToNocoloredPiece(pieceString){

    // I hate to say it, but I asked GPT to do it, I have no idea of how else to do it ngl

    const colors = ["white", "black"];
    
    for (let color of colors) {
        if (pieceString.toLowerCase().startsWith(color)) {
        return pieceString.slice(color.length).trim();
        }
    }
    
    return pieceString; 
}

boardDraw()