for (let i=0 ; i<4 ; i++) {
    $("#card-container").append("<tr class='card-row'></tr>");
    for (let j=0 ; j<4 ; j++) {
        $(".card-row:last").append("<td class='card'></td>");
    }
}

$(".card").on("click", function() {
    $(this).css("backgroundImage", "url('../img/rabit.png')");
    $(this).attr("disabled", true);
});