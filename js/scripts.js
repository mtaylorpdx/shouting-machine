$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var textHereInput = $("input#textHere").val().toUpperCase();
    $(".textHere").append(textHereInput);

    event.preventDefault();
  });
});