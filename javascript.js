const container = document.querySelector("div");

for(let i=0;i<16;i++){
    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);
    for(let j=0;j<16;j++){
        const square = document.createElement("div");
        square.className = "cell";
        row.appendChild(square);
    }
}