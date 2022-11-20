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
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("A visualização em dispositivos móveis pode ser prejudicada pelo tamanho da tela. Se possível, utilize um computador para acessar o site.");
    }
});
