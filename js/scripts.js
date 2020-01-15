$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var textHereInput = $("input#textHere").val().toUpperCase();
    $(".textHere").text(textHereInput);

    event.preventDefault();
  });
});