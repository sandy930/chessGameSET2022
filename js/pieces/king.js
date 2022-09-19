function King(isWhite, isKilled = false) {
    const kingImgUrl = isWhite ? '../chess-img/king_white.png' : "../chess-img/king_black.png"
    this.checkKingMove=function(){
      console.log("piece")
    }
    Piece.call(this, isWhite, isKilled, PieceName.KING, kingImgUrl)
  }