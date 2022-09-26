function Knight(x,y,isWhite, isKilled = false) {
  this.x=x;
  this.y=y;
  const knightImgUrl = isWhite ? '../chess-img/knight_white.png' : '../chess-img/knight_black.png';
  Piece.call(this, isWhite, isKilled, PieceName.KNIGHT, knightImgUrl);
  Board.call(this);
  this.checkKnightMove=function(){
    var board = this.initialize();
    console.log(this)
    if(this.x == 0 || this.x == 7){
      console.log('knight is true');
    } else{
      console.log('knight is false');
      this.validMoveDirection.push(board[this.x - 2].cells[this.y + 1]);
      this.validMoveDirection.push(board[this.x - 2].cells[this.y - 1]);
    }
    this.validMoveDirection.map((cell) => {
      cell.color = "pink";


    });
    this.renderBoard();

  }
}