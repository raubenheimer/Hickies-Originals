var discountHtml = $("#discountPrice").parent().html()

//jquery code that enables popovers
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});

//Selects Electric Red
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

//Creates dots under details
function details() {
  var numProducts = Number($("#counter").text())
  var dotColor = $("input[name=colors]:checked").parent().attr('id')
  var htmlDot = "<label class=\"colorSelect\" id=\"" + dotColor + "\"></label>"
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
  $("#elong").attr("data-target", "#checkOutModal")
  $("#elong").attr("onclick", "generateCheckOut()")
  details()
}

//Generates check out modal info
function generateCheckOut() {
  var cost = Number($("#discountPrice").text().replace(/\$/g, '')) * Number($("#display").text())
  $("#checkOutColor").text($("input[name=colors]:checked").val());
  $("#checkOutSize").text($("input[name=sizes]:checked").parent().text())
  $("#checkOutQuantity").text($("#display").text())
  $("#checkOutCost").text('$' + cost)
}

//Updates add to cart modal color and size selection output 
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

  //If statment that enables the discount on electric red
  if (color != 'Electric Red') {
    $("#discountPrice").parent().html('<h4 id="discountPrice">$17.99</h4>');
  }
  else {
    $("#discountPrice").parent().html(discountHtml);
  }
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

//Check out modal refreshes page
function refresh() {
  location.reload();
}

