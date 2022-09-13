function Queen(isWhite, isKilled = false) {
    const queenImgUrl = isWhite ? '../chess-img/queen_white.png' :
      '../chess-img/queen_black.png'

    Piece.call(this, isWhite, isKilled, PieceName.QUEEN, queenImgUrl)
  }