$(function() {

  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
    // var newSleep = $(this).data("newsleep");
    var newEatenState = {
      eaten: true
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("Burger has been eaten.");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#makeburger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
     console.log("clicked add");
    event.preventDefault();
    var newBurger = {
      name: $("#bg").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/addburger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created new burger.");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});