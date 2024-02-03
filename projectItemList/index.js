var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//from submit event

form.addEventListener("submit", addItem);

// delete event
itemList.addEventListener("click", removeItem);

// filter event
filter.addEventListener("keyup", filterItems);

//add item

function addItem(e) {
  e.preventDefault();

  // get input values

  var newItem = document.getElementById("item").value;

  // create new li element
  var li = document.createElement("li");

  // add class

  li.className = "list-group-item";

  // add text node with input values
  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);

  //create delete button
  var deleteBtn = document.createElement("button");

  // add classes to del btn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // append btn to li
  li.appendChild(deleteBtn);
}

// remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();

  // get list
  var items = itemList.getElementsByTagName("li");

  // convert to array

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
