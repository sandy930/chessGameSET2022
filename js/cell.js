function Cell(x=0,y=0,peice=null,color='gray'){
    this.x=x;
    this.y=y;
    this.peice=peice;
    this.color=color
    this.cell=document.createElement("div")
    this.renderCell=function(){
        this.cell.className = "square";
        this.cell.style.backgroundColor = this.color
        return this.cell
    }
    return this.renderCell()
}