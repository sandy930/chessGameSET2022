function Queen(isWhite, isKilled = false) {
    const queenImgUrl = isWhite ? '../chess-img/queen_white.png' :
      '../chess-img/queen_black.png'
      this.checkQueenMove=function(){
        console.log("piece")
      }

    Piece.call(this, isWhite, isKilled, PieceName.QUEEN, queenImgUrl)
  }