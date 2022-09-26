function Knight(isWhite, isKilled = false) {
  const knightImgUrl = isWhite ? '../chess-img/knight_white.png' : '../chess-img/knight_black.png';
  Piece.call(this, isWhite, isKilled, PieceName.KNIGHT, knightImgUrl);
  Board.call(this);
  this.checkKnightMove=function(){
    var board = this.initialize();
    if(this.x == 7){
      console.log('knight is true');
      this.validMoveDirection.push(board[this.x - 2].cells[this.y + 1]);
      this.validMoveDirection.push(board[this.x - 2].cells[this.y - 1]);
    } else{
      console.log('knight black is false');
      // this.validMoveDirection.push(board[this.x - 1].cells[this.y - 2]);
      // this.validMoveDirection.push(board[this.x + 1].cells[this.y - 2]);
      // this.validMoveDirection.push(board[this.x + 1].cells[this.y + 2]);
      // this.validMoveDirection.push(board[this.x - 1].cells[this.y + 2]);
    }
    if(this.x == 0){
      console.log('knight white is true');
      this.validMoveDirection.push(board[this.x + 2].cells[this.y + 1]);
      this.validMoveDirection.push(board[this.x + 2].cells[this.y - 1]);
    } else {
      console.log('knight white is false');

    }
    this.validMoveDirection.map((cell) => {
      cell.color = "pink";
     

    });
    this.renderBoard();

  }
}