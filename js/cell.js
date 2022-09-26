function Cell(x = 0, y = 0, piece, color = "gray") {
  this.x = x;
  this.y = y;
  this.piece = piece;
  this.color = color;
  this.cell = document.createElement("div");
  this.cell.addEventListener("click", () => {
    if(this.piece){
      console.log(1)
      this.checkValidMove(this,piece)
    }
  });
  Board.call(this);
  this.renderCell = function (piece) {
    this.cell.style.backgroundColor = this.color;
    this.cell.className = "square";
    return this.cell;
  };

  this.checkValidMove = function (event,piece) {
    if(this.piece){
      switch (this.piece.name) {
        case "pawn":
          this.piece.checkPawnMove(event);
          break;
        case "bishop":
          this.piece.checkBishopMove(event);
          break;
        case "king":
          this.piece.checkKingMove(event);
          break;
        case "knight":
          this.piece.checkKnightMove(event);
          break;
        case "rook":
          this.piece.checkRookMove(event);
          break;
        case "queen":
          this.piece.checkQueenMove(event);
          break;
      }
    }
  };
}
