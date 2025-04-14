function swipe() {
  // Change button to active when clicked
$(".category-button").click(function() {
  $(".category-button").removeClass("active");
  $(this).addClass("active");
});


// Makes variables for button and page content 
var $categoryButton = $(".category-button");
var $pageContent = $(".page-content");

// Hide all page content shows first one
$(".page-content")
  .hide()
  .first()
  .show();

// When button is clicked, show content 
$categoryButton.on("click", function(e) {
var $category = $(this).data("target");
  $pageContent
    .hide()
    .find('img').hide()
    .end()
    .filter("." + $category)
    .show()
    .find('img').fadeIn();
});
}