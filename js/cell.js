function Cell(x=0,y=0,piece,color='gray'){
    this.x=x;
    this.y=y;
    this.piece=piece;
    this.color=color
    this.cell=document.createElement("div")
    this.renderCell=function(){
        this.cell.style.backgroundColor=this.color
        this.cell.className="square"
        return this.cell
    }


}