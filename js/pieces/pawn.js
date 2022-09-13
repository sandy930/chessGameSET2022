function Pawn(isWhite, isKilled = false) {
    const pawnImgUrl = isWhite ? '../chess-img/pawn_white.png' : '../chess-img/pawn_black.png'
    Piece.call(this, isWhite, isKilled, PieceName.PAWN, pawnImgUrl)
    this.move=function(){


    }
  }