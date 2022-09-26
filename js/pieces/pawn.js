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
    if (this.x == 1 || this.x == 6) {
      this.validMoveDirection.push(board.rows[this.x - 1].cells[this.y]);
      this.validMoveDirection.push(board.rows[this.x - 2].cells[this.y]);
    } else {
      this.validMoveDirection.push(board.rows[this.x - 1].cells[this.y]);
    }

    board.renderBoard();
    this.showValidMove(this.validMoveDirection)
    console.log(this.validMoveDirection)

  };

  this.showValidMove=function(validMove){
    let pieceValidmove=validMove.slice()
    pieceValidmove.map(cell=>{
      cell.color="pink"
      board.renderBoard();
      cell.cell.addEventListener("click",(e)=>{
        board.rows[cell.x].cells[cell.y].piece=new Pawn(cell.x,cell.y,isWhite)
        board.rows[this.x].cells[this.y].piece=null
        console.log(board.rows[this.x].cells[this.y])
        board.renderBoard();
      })
    })
    return validMove

  }

  this.deleteOldMove=function(){
    pieceValidmove.map(cell=>{
      board.rows[cell.x].cells[cell.y].color="pink"
      board.renderBoard();
      cell.cell.addEventListener("click",(e)=>{
        board.rows[cell.x].cells[cell.y].piece=new Pawn(cell.x,cell.y,isWhite)
        board.rows[this.x].cells[this.y].piece=null
        board.renderBoard();
      })


    })
  }


}

// test case cho pawn
// + check firsrMove ? go 2 cell : go 1
// + check tai vi tri board[x-1].cells[y+1] && cells[y-1] if yes=> exist piece ?  can change y position of pawn : go 1 cell
