function Pawn(x, y, isWhite, isKilled = false) {
  this.x = x;
  this.y = y;
  this.validMoveDirection = [];
  const pawnImgUrl = isWhite
    ? "../chess-img/pawn_white.png"
    : "../chess-img/pawn_black.png";
  Piece.call(this, isWhite, isKilled, PieceName.PAWN, pawnImgUrl);
  Board.call(this);
  this.checkPawnMove = function (cell) {
    var board = this.initialize();
    if (this.x == 1 || this.x == 6) {
      this.validMoveDirection.push(board[this.x - 1].cells[this.y]);
      this.validMoveDirection.push(board[this.x - 2].cells[this.y]);
    } else {
      this.validMoveDirection.push(board[this.x - 1].cells[this.y]);
    }
    this.validMoveDirection.map((cell) => {
      cell.color = "pink";
      // cell.cell.addEventListener("click", () => cell.checkValidMove(cell,this))

    });
    this.renderBoard();
  };


}

// test case cho pawn
// + check firsrMove ? go 2 cell : go 1
// + check tai vi tri board[x-1].cells[y+1] && cells[y-1] if yes=> exist piece ?  can change y position of pawn : go 1 cell
