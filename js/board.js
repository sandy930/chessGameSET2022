function Board() {
  this.row = 8;
  this.col = 8;
  this.rows = [];

  this.initialize = function () {
    for (var rowIndex = 0; rowIndex < this.row; rowIndex++) {
      const row = new Row();
      this.rows.push(row);

      for (var colIndex = 0; colIndex < this.col; colIndex++) {
        let cell;
        cell = new Cell(rowIndex, colIndex, null);
        if (colIndex % 2 == 0) {
          cell = new Cell(rowIndex, colIndex, null, "white");
        }

        if (rowIndex === 1) {
          cell.piece = new Pawn(rowIndex,colIndex,true);
        }
        if (rowIndex === 6) {
          cell.piece = new Pawn(rowIndex,colIndex,false);
        }
        this.rows[rowIndex].cells.push(cell);
      }

    }
    this.rows[0].cells[0].piece = new Rook(true);
    // this.rows[0].cells[0].piece.designPieceElement()

    this.rows[0].cells[7].piece = new Rook(true);
    // this.rows[0].cells[7].piece.designPieceElement()

    // Create white rook
    this.rows[7].cells[0].piece = new Rook(false);
    // this.rows[7].cells[0].piece.designPieceElement()

    this.rows[7].cells[7].piece = new Rook(false);
    // this.rows[7].cells[7].piece.designPieceElement()

    // Create black knight
    this.rows[0].cells[1].piece = new Knight(true);
    // this.rows[0].cells[1].piece.designPieceElement()

    this.rows[0].cells[6].piece = new Knight(true);
    // this.rows[0].cells[6].piece.designPieceElement()

    // Create white knight
    this.rows[7].cells[1].piece = new Knight(false);
    // this.rows[7].cells[1].piece.designPieceElement()

    this.rows[7].cells[6].piece = new Knight(false);
    // this.rows[7].cells[6].piece.designPieceElement()

    // Create black bishop
    this.rows[0].cells[2].piece = new Bishop(true);
    // this.rows[0].cells[2].piece.designPieceElement()

    this.rows[0].cells[5].piece = new Bishop(true);
    // this.rows[0].cells[5].piece.designPieceElement()

    // Create white bishop
    this.rows[7].cells[2].piece = new Bishop(false);
    // this.rows[7].cells[2].piece.designPieceElement()

    this.rows[7].cells[5].piece = new Bishop(false);
    // this.rows[7].cells[5].piece.designPieceElement()

    // Create queen
    this.rows[0].cells[3].piece = new Queen(true);
    // this.rows[0].cells[3].piece.designPieceElement()

    this.rows[7].cells[4].piece = new Queen(false);
    // this.rows[7].cells[3].piece.designPieceElement()

    // Create king
    this.rows[0].cells[4].piece = new King(true);
    // this.rows[0].cells[4].piece.designPieceElement()

    this.rows[7].cells[3].piece = new King(false);
    // this.rows[7].cells[4].piece.designPieceElement()
    return this.rows;
  };

  this.renderBoard = function () {
    const board = document.getElementById("chess-board");
    for (var rowIndex = 0; rowIndex < this.rows.length; rowIndex++) {
      let row = this.rows[rowIndex].renderRow(false);
      if (rowIndex % 2 == 0) {
        row = this.rows[rowIndex].renderRow(true);
      }

      for (var colIndex = 0; colIndex < 8; colIndex++) {
        const cell = this.rows[rowIndex].cells[colIndex].renderCell();
        if (this.rows[rowIndex].cells[colIndex].piece) {
          const piece=this.rows[rowIndex].cells[colIndex].piece.renderPiece();
          cell.appendChild(piece)
        }
        row.appendChild(cell);
      }
      board.appendChild(row);
    }
  };

}
