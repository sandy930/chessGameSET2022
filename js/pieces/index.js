function Piece(isWhite, isKilled = false, name, imgUrl) {
  this.name = name;
  this.imgUrl = imgUrl;
  this.isWhite = isWhite;
  this.isKilled = isKilled;
  this.validMoveDirection=[]
  this.image = document.createElement("img");
  this.renderPiece = function () {
    this.image.className = "piece-image";
    this.image.setAttribute("src", this.imgUrl);
    return this.image;
  };

}