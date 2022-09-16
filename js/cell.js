function Cell(x=0,y=0,piece,color='gray'){
    this.x=x;
    this.y=y;
    this.piece=piece;
    this.color=color
    this.cell=document.createElement("div")
    this.renderCell=function(){
        this.cell.style.backgroundColor=this.color
        this.cell.className="square"
        this.cell.addEventListener("click", (event) => this.checkValidMove(event));
        return this.cell
    }
    this.checkValidMove=function(event){
    switch (this.piece.name) {
      case "pawn":
        this.piece.checkPawnMove(event)
        break;
      case "bishop":
        this.piece.checkBishopMove(event)
         break;
      case "king":
        this.piece.checkKingMove(event)
         break;
      case "knight":
        this.piece.checkKnightMove(event)
         break;
      case "rook":
        this.piece.checkRookMove(event)
         break;
      case "queen":
        this.piece.checkQueenMove(event)
         break;
    }

  }


}