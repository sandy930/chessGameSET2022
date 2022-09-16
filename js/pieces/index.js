function Piece(isWhite, isKilled = false, name, imgUrl) {
  this.name = name;
  this.imgUrl = imgUrl;
  this.isWhite = isWhite;
  this.isKilled = isKilled;
  this.image = document.createElement("img");
  this.renderPiece = function () {
    this.image.className = "piece-image";
    this.image.setAttribute("src", this.imgUrl);
    this.image.addEventListener("click", (event) => this.checkValidMove(event));
    return this.image;
  };
  this.checkValidMove=function(event){
    switch (this.name) {
      case "pawn":
        this.checkPawnMove(event)
        break;
      case "bishop":
        this.checkBishopMove(event)
         break;
      case "king":
        this.checkKingMove(event)
         break;
      case "knight":
        this.checkKnightMove(event)
         break;
      case "rook":
        this.checkRookMove(event)
         break;
      case "queen":
        this.checkQueenMove(event)
         break;
    }

  }
}

// function checkValidMove(piece,event) {
//   switch (piece.name) {
//     case "pawn":
//       checkPawnMove(piece,event)
//     case "bishop":
//       checkBishopMove(piece,event)
//     case "king":
//       checkKingMove(piece,event)
//     case "knight":
//       checkKnightMove(piece,event)
//     case "rook":
//       checkRookMove(piece,event)
//     case "queen":
//       checkQueenMove(piece,event)
//   }
// }
