const container = document.querySelector(".container");
const button = document.querySelector("button");

function createGrid(size){
    container.innerHTML = "";
    for(let i=0;i<size;i++){
        const row = document.createElement("div");
        row.classList.add("row");

        for(let j=0;j<size;j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", function(){
                cell.style.backgroundColor = "black";
                if(+cell.style.opacity <= 0.9){
                    cell.style.opacity = +cell.style.opacity + 0.1;
                }
            })
            row.appendChild(cell);
            console.log("c");
        }
        container.appendChild(row);
    }
}

button.addEventListener("click", function(){
    const newVal = document.querySelector("input").value;
    if(newVal > 100 || newVal < 1){
        return null;
    }
    createGrid(newVal);
})

createGrid(16);