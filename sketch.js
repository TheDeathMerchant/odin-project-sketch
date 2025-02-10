const fragment1 = document.createDocumentFragment();
for (let i=1; i<=16; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = `row-${i}`;
    newDiv.style.display = "flex";
    fragment1.append(newDiv);
}
document.body.appendChild(fragment1);

for (let i=1; i<=16; i++) {
    let rowDiv = document.getElementById(`row-${i}`);
    let fragment2 = document.createDocumentFragment();
    for (let j=1; j<=16; j++) {
        let innerDiv = document.createElement("div");
        innerDiv.className = `inner-${i}-${j}`;
        fragment2.append(innerDiv);
    }
    rowDiv.append(fragment2);
}