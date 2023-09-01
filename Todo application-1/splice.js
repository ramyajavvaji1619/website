let ArrayList = [4, "Ramya", 26, "India", 87, 32];
// let stringifiedArray = JSON.stringify(ArrayList);

let updatedArray = document.getElementById("updatedArray");
let startIndex = document.getElementById("startIndexInput");
let deletedIndex = document.getElementById("deletedIndexInput");
let addToIndex = document.getElementById("itemToIndexInput");

function json() {
    let stringifiedArray = JSON.stringify(ArrayList);
    updatedArray.textContent = stringifiedArray;
}
json()
let spliceBtn = document.getElementById("spliceBtn");

spliceBtn.onclick = function () {
    let startValu = startIndex.value;
    let deleteValu = deletedIndex.value;
    let addValu = addToIndex.value;
    if (startValu === " ") {
        alert("Please enter start Index");
        return;
    }
    if (deleteValu === " ") {
        deleteValu = 0;
    }
    if (addValu === " ") {
        ArrayList.splice(parseInt(startValu), parseInt(deleteValu))
    } else {
        ArrayList.splice(parseInt(startValu), parseInt(deleteValu), parseInt(addValu))
    }
    startIndex.value = "";
    deletedIndex.value = "";
    addToIndex.value = "";
    json()

};