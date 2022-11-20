$("[modal-target]").click(function() {
    var modal = $(this).attr("modal-target");
    $("[modal-id="+modal+"]").toggleClass("modal-container-open");
    $("[modal-id="+modal+"]").children().toggleClass("modal-open");
});

$(".modal-close").click(function() {
    $(this).parents().eq(2).toggleClass("modal-container-open");
    $(this).parents().eq(1).toggleClass("modal-open");
});

$(document).ready(function() {
    var width = $(document).outerWidth();
    if(width < 700) {
        alert("A visualização do site em dispositivos móveis pode ser prejudicada. Se possível, utilize um computador.");
    }
});
