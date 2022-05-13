$(function() {


    //Fixid header
let header = $("#header");
let intro = $("#intro");
let introH = intro.innerHeight();
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize",function(){
let introH = intro.innerHeight();
scrollPos = $(this).scrollTop();

if (scrollPos > introH) {
    header.addClass("fixed");
} else {
    header.removeClass("fixed");
}

});



//Smooth Scroll
$("[data-scroll]").on("click", function(event) {
event.preventDefault();
let elementId = $(this).data('scroll');

console.log(elementId);
});
});