const btn = document.getElementById("button");
let side =16;
let gridContainer;

function getSize() {
    
    side = parseInt(prompt("What is the size of the square you would like?:", "16"));
    if (isNaN(side) || side <=1 || side >100) {
        alert("Please a number between 1 and 100");
        getSize();
        return;
    }
    removeContainer();
    createContainer();
    drawGrid(side)

}


btn.addEventListener("click", getSize  )

function createContainer() {
    if (!gridContainer) {
         gridContainer = document.createElement("div");
        gridContainer.id = "grid-container";
        document.body.appendChild(gridContainer)
        gridContainer.style.height = "100vh";
        gridContainer.style.width = "960px";
    } 
}

function removeContainer() {
    if(gridContainer) {
        gridContainer.remove();
        gridContainer = null;
    }

}

function drawGrid(size) {
 
    const fragment1 = document.createDocumentFragment();
    for (let i=1; i<=size; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList = `row-${i}`;
        
        fragment1.append(newDiv);
    }
    gridContainer.append(fragment1);
    let rowDiv = document.querySelectorAll('[class^="row-"]');

    for (let i=1; i<=size; i++) {
        
        let currentDiv = rowDiv[i-1];
        let fragment2 = document.createDocumentFragment();
        for (let j=1; j<=size; j++) {
            let innerDiv = document.createElement("div");
            innerDiv.className = `inner-${i}-${j}`;
            fragment2.append(innerDiv);
        }
        currentDiv.append(fragment2);
    }
}