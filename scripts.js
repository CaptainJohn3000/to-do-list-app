function newItem() {
  // Adding a new item to the list of items:
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("Don't Forget To Write Something!");
  } else {
    $("#list").append(li);
  }

  // "Striking" and item out from the list of items:

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  // Adding an X (delete button):
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  // Adding Class delete (display: none) from css:
  function deleteListItem() {
    li.addClass("delete");
  }

  crossOutButton.on("click", deleteListItem);

  // Reordering items:
  $("#list").sortable();
}

// JS Code added below for easier reference

// function newItem() {
//   //javascript
//   //1. Adding a new item to the list of items:
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("input").value;
//   let text = document.createTextNode(inputValue);
//   li.appendChild(text);

//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     let list = document.querySelector("#list");
//     list.appendChild(li);
//   }

//   //2. Crossing out an item from the list of items:
//   function crossOut() {
//     li.classList.toggle("strike");
//   }

//   li.addEventListener("dblclick", crossOut);

//   //3(i). Adding the delete button "X":
//   let crossOutButton = document.createElement("crossOutButton");
//   crossOutButton.appendChild(document.createTextNode("X"));
//   li.appendChild(crossOutButton);

//   crossOutButton.addEventListener("click", deleteListItem);
//   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//   function deleteListItem() {
//     li.classList.add("delete");
//   }
//   // 4. Reordering the items:
//   $("#list").sortable();
// }
