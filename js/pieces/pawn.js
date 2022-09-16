function Pawn(x,y,isWhite, isKilled = false) {
  this.x=x;
  this.y=y
  const pawnImgUrl = isWhite ? '../chess-img/pawn_white.png' : '../chess-img/pawn_black.png'
  Piece.call(this, isWhite, isKilled, PieceName.PAWN, pawnImgUrl)
  Board.call(this)
  this.checkPawnMove=function(event){
      const cellOfPawn= event.target.parentElement
      this.initialize()
      console.log(this.rows)

    }
  }

