function Knight(isWhite, isKilled = false) {
    const knightImgUrl = isWhite ? '../chess-img/knight_white.png' : '../chess-img/knight_black.png'
    this.checkKnightMove=function(){
      console.log("piece")
    }

    Piece.call(this, isWhite, isKilled, PieceName.KNIGHT, knightImgUrl)
  }