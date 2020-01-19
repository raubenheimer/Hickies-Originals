//jquery code that enables popovers
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});

$("#color2").prop("checked", true)
colorSelector()

//Used for incrementing the counter when the plus button is clicked
function incrementCounter() {
  var num = Number($("#counter").text());
  if (num < 10) {
    $("#counter").text(num + 1);
  }
}

//Used for decrementing the counter when the minus button is clicked
function decrementCounter() {
  var num = $("#counter").text();
  if (num > 0) {
    $("#counter").text(num - 1);
  }
}

//Creates dots
function details() {
  var numProducts = Number($("#counter").text())
  var dotColor = $("input[name=colors]:checked").parent().attr('id')
  var htmlDot = "<label class=\"colorSelect\" id=\"" + dotColor+ "\"></label>"
  for (i = numProducts; i > 0; i--) {
    var htmlNow = $("#theDots").html()
    $("#theDots").html(htmlNow + htmlDot)
  }
  console.log($("#theDots").html())
}

//Updates the add to cart amount on the main page, changes add to cart button and calls the details function
function updateDisplay() {
  $("#display").text($("#counter").text());
  $("#elong").text("Check Out Now");
  $("#elong").css("background-color", "green");
  $("#elong").removeAttr("data-target")
  $("#elong").removeAttr("data-toggle")
  details()
}

//Updates model color and size selection output 
function updateModalColorAndSize() {
  $("#Color_Input").text($("#Color_Output").text())
  $("#sizeInput").text($("input[name=sizes]:checked").parent().text())
}

//Function that handels everything related to color selection
function colorSelector() {
  var color = $("input[name=colors]:checked").val();
  document.getElementById("Color_Output").innerHTML = color;
  $("input[name=colors]").parent().parent().css("border", "2px solid white");
  $("input[name=colors]:checked").parent().parent().css("border", "2px solid black");
  $("#shirtPic").attr('src', 'img/' + color + '.png');
}

//Five star rating system
function rating(stars) {
  var numStars = Number(stars);
  $(".fa").removeClass("starred");
  for (i = numStars; i > 0; i--) {
    var cat = i.toString();
    var thisStar = "#star" + cat;
    $(thisStar).addClass("starred");
  }
  if ($("#reviewNum").text() == "1293") {
    $("#reviewNum").text("1294")
  }
}

