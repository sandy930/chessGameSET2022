function Row(){
    this.cells=[]
    this.row=document.createElement("div");
    this.renderRow=function(rowReverse){
        this.row.className =rowReverse ? "row-reverse":"row"
        return this.row
    }
}