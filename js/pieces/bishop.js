function Bishop(isWhite, isKilled = false) {
    const bigshopImgUrl = isWhite ? '../chess-img/bishop_white.png' : '../chess-img/bishop_black.png';
    Piece.call(this, isWhite, isKilled, PieceName.BISHOP, bigshopImgUrl);
    this.checkBishopMove=function(){
      console.log("piece")
    }
  }