function King(isWhite, isKilled = false) {
    const kingImgUrl = isWhite ? '../chess-img/king_white.png' : "../chess-img/king_black.png"

    Piece.call(this, isWhite, isKilled, PieceName.KING, kingImgUrl)
  }