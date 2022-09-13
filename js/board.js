function Board() {
  this.row = 8;
  this.col = 8;
  this.rows=[];
  this.cells=[];
  this.boxes = null; // boxes has Spot items in 8x8 array 2D
  this.board = document.getElementById("chess-board");
  this.initialize = function () {
    for (var rowIndex = 0; rowIndex < this.row; rowIndex++) {
      const row=new Row()
      this.rows.push(row)
      for(var colIndex=0; colIndex<this.col; colIndex++){
        if(rowIndex%2==0){
          this.rows[rowIndex].classList.add('row-reverse')
        }
        const cell=new Cell(rowIndex,colIndex,null,colIndex%2==0 ? 'gray' : 'white')
        row.appendChild(cell)
        this.cells.push(cell)

      }
      this.board.appendChild(row)
    }


    // // put white king on Spot
    // currentBoxes[7][4].piece = new King(true);
    // // put black king on Spot
    // currentBoxes[0][3].piece  = new King(false);

    // //put white queen on Spot
    // currentBoxes[7][3].piece  = new Queen(true);
    // //put black queen on Spot
    // currentBoxes[0][4].piece  = new Queen(false);

    // // put white bishop on Spot
    // currentBoxes[7][2].piece  = new Bishop(true);
    // currentBoxes[7][5].piece  = new Bishop(true);
    // // put black bishop on Spot
    // currentBoxes[0][2].piece  = new Bishop(false);
    // currentBoxes[0][5].piece  = new Bishop(false);

    // //put white rook on Spot
    // currentBoxes[7][0].piece  = new Rook(true);
    // currentBoxes[7][7].piece  = new Rook(true);
    // //put black rook on Spot
    // currentBoxes[0][0].piece  = new Rook(false);
    // currentBoxes[0][7].piece  = new Rook(false);

    // //put white knight on Spot
    // currentBoxes[7][1].piece  = new Knight(true);
    // currentBoxes[7][6].piece  = new Knight(true);
    // //put black knight on Spot
    // currentBoxes[0][1].piece  = new Knight(false);
    // currentBoxes[0][6].piece = new Knight(false);
    // this.boxes = currentBoxes;
  };
}
