function Rook(isWhite, isKilled = false) {
    const rookImgUrl = isWhite ? '../chess-img/rook_white.png' : '../chess-img/rook_black.png'

    Piece.call(this, isWhite, isKilled, PieceName.ROOK, rookImgUrl)
  }
