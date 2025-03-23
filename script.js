var board = [
    ["white rook","white knight","white bishop","white queen","white king","white bishop","white knight","white rook"],
    ["white pawn","white pawn","white pawn","white pawn","white pawn","white pawn","white pawn","white pawn"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","white pawn","","",""],
    ["","","","","","","",""],
    ["black pawn","black pawn","black pawn","black pawn","black pawn","black pawn","black pawn","black pawn"],
    ["black rook","black knight","black bishop","black queen","black king","black bishop","black knight","black rook"]
]

var possibleMovesNow = []

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
    let objOfClickedPiece = checkValidPiece(board[i][j])
    objOfClickedPiece.position = {i, j, ID}
    if (possibleMovesNow != null){
        for (i of possibleMovesNow){
            let tempID = i[0] * 8 + i[1] + 1; 
            console.log(possibleMovesNow)
            //document.getElementById(tempID).style.color = "red"
        }
    }
    moves(coloredPieceToNocoloredPiece(objOfClickedPiece.piece), {i : i, j : j, ID : ID})
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
    var indexSave = 0;
    var stringToReturn = "";
    for (let i = 0; i < pieceString.length; i++){
        if (pieceString[i] == " "){
            indexSave = i+1;
        }
    }

    for (let i = indexSave; i < pieceString.length; i++){
        stringToReturn += pieceString[i];
    }

    return stringToReturn;
}

function moves(pieceToMove, position){
    var indexCounter = 0;
    if (pieceToMove == "pawn"){
        if (board[position.i][position.j] == "white pawn" && position.i == 1){
            for (let i = 1; i < 3; i++){
                document.getElementById(Number(position.ID) + (8 * i)).style.backgroundColor = "lightgreen";
                possibleMovesNow[indexCounter] = [position.i+i,position.j]
                indexCounter++
            }
        }
        else if (board[position.i][position.j] == "white pawn"){
            document.getElementById(Number(position.ID) + (8 * 1)).style.backgroundColor = "lightgreen";
            possibleMovesNow += [position.i,position.j]
        }
    }
}


boardDraw()