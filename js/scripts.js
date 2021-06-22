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
