// Check off to do items
$("ul").on("click", "li", function(e) {
    $(this).toggleClass("completed");
    e.stopPropagation();
});

// Click on trash to delete to do items
$("ul").on("click", "span",function(e) {
    // fade out element then remove when fade is complete
    $(this).parent().fadeOut(500, function () {
        // removes parent element (li)
        $(this).remove();
    });
    e.stopPropagation();
});

// Creating new to do items
$("input[id='bigInput']").keypress(function(e) {
    if(e.which === 13){
        let todoText = $(this).val();
        // Clear input
        $(this).val("");
        $("ul[id='bigUl']").append("<li class='m-0 p-0'><span><i class='fa fa-trash trashIcon'></i></span> " + todoText + "</li>");
    }
});

// Fade in and out input
$(".fa-plus").click(function(){
    $("input[id='bigInput']").fadeToggle();
});


// $("li").click(function() {
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color:"black",
//             textDecoration: "none"
//         });
//     }
//
//     else {
//         $(this).css({
//             color:"gray",
//             textDecoration: "line-trough"
//         });
//     }
// });