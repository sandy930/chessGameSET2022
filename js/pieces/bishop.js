function Bishop(isWhite, isKilled = false) {
    const bigshopImgUrl = isWhite ? '../chess-img/bishop_white.png' : '../chess-img/bishop_black.png'
    this.move=function(){
      console.log(this)

    }
    Piece.call(this, isWhite, isKilled, PieceName.BISHOP, bigshopImgUrl)
  }