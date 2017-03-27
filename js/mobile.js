/////////////////Mobile Menu//////////////////////

var $select = $("<select></select>");
$(".about-nav").append($select);

$(".about-nav a").each(function() {
    var $anchor = $(this);
    var $option = $("<option></option>");
    $option.val($anchor.attr("href"));
    $option.text($anchor.text());
    $select.append($option);
});

var $button = $("<button>Go</button>");
$(".about-nav").append($button);

$button.click(function() {
    window.location = $select.val();
});