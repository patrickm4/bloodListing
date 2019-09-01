let addEntry = document.getElementById("formAdd"),
  dateTaken = document.getElementById("dateTaken"),
  timeTaken = document.getElementById("timeTaken"),
  bloodSugar = document.getElementById("bloodSugar"),
  bloodPressure = document.getElementById("bloodPressure"),
  prePostFood = document.getElementById("prePostFood"),
  tableRows = document.getElementById("table-rows"),
  listOfBloodWork = [],
  newId = 1;

function toSubmit() {
  document.getElementById("main-form").submit(function(e) {
    e.preventDefault();
  });
}

// from webinventory repo
// function createItem(iTv, nTv){
//   //Add item to array
//   itemObj[iTv] = nTv;
//
//   nItem = document.createElement("div");
//   nItem.className = "format";
//   //give item name to id to help with removing the div
//   nItem.id = iTv;
//   nItem.innerHTML = "<button class='editHide' onclick='showEditWindow(this)'>Edit</Button><p class='fg'>"+iTv+"</p><p class='fg'>"+nTv+"</p><button class='close' class='fg' onclick='removeThis(this)'>X</button>";
//
//   disp.appendChild(nItem);
//
// }

function createItem(itemDate, itemTime, itemSugar, itemPressure, itemPrePost) {
  rowOfItem = document.createElement("div");
  // rowOfItem.id += 1
  // rowOfItem.innerHTML = `${itemDate} ${itemTime} ${itemSugar} ${itemPressure} ${itemPrePost}`;
  rowOfItem.innerHTML = `yees`;
  tableRows.appendChild = rowOfItem;
  console.log("yeet");
}

addEntry.addEventListener("click", function(e) {
  e.preventDefault();
  createItem(
    dateTaken.value,
    timeTaken.value,
    bloodSugar.value,
    bloodPressure.value,
    prePostFood.value
  );
});
