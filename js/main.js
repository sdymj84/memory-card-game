/*=======================================================
    Variables
========================================================*/
const n = 4;
const imageCount = n*n/2;
let finishTime = 0;



/*=======================================================
    Execute at load
========================================================*/
gameStart();
$("#runner").runner();


/*=======================================================
    Events
========================================================*/
// Click event listener on card
var clickEvent = function() {
    var cardOpened = $(this).removeClass("card--closed").addClass("card--opened");
    
    // Action when card is opened
    // 1. Check if currently opened card is one or two
    var cardOpenedCount = $(".card").not(".card--closed, .card--revealed").length;
    
    // 2. If one : save "background image name" into "card1"
    if (cardOpenedCount == 1) {
        $(".card").bind("click", clickEvent);
        card1 = $(this);
    
    // If two : block event when click > compare image with previously opened one
    //        > if they are not the same, close both cards
    //        > if they are the same, leave them opened and unbind event on those 2 cards
    } else if (cardOpenedCount == 2) {
        $(".card").unbind("click");
        card2 = $(this);
        
        if (card1.css("background-image") != card2.css("background-image")) {
            setTimeout(function() {
                card1.addClass("card--closed").removeClass("card--opened");
                card2.addClass("card--closed").removeClass("card--opened");
                $(".card").bind("click", clickEvent);
            }, 800);
        } else {
            $(".card").bind("click", clickEvent);
            card1.addClass("card--revealed").removeClass("card").unbind();
            card2.addClass("card--revealed").removeClass("card").unbind();
        }
    } else if ($(".card--revealed").length == n*n) {
        // When completed, create text "Completed!" and append it to overlay message
        finishTime = $("#runner").runner("stop");
        showMessage("Completed! Click to replay");
    }
};

$(".overlay_message").on("click", function() {
    $(".overlay").removeClass("overlay--show");
    //location.reload();
    $("#runner").runner("start");
});

$(".card").bind("click", clickEvent);



/*=======================================================
    Functions
========================================================*/
function gameStart() {
    showMessage("PRESS TO START");

    // Clear the table first
    $("#card-container").empty();

    // Create card elements
    for (var i=0 ; i<n ; i++) {
        $("#card-container").append("<tr class='card-row'></tr>");
        for (var j=0 ; j<n ; j++) {
            $(".card-row:last").append("<td class='card'></td>");    
        }
    }

    // Create image array
    var images = [];
    for (var i=0 ; i<n*n ; i++) {
        if (i<imageCount) {
            images.push(i + ".png");
        } else {
            images.push(i-imageCount + ".png");
        }
    }

    // Shuffle the image array and assign them in elements
    $(".card").each(function(i, value) {
        var j = Math.floor(Math.random() * (n*n - i)) + i;
        var temp = images[i];
        images[i] = images[j];
        images[j] = temp;

        $(this).css("backgroundImage", "url('img/" + images[i] + "')")
            .addClass("card--closed");
    });
}

function showMessage(message) {
    $(".overlay_message").text(message);
    $(".overlay").addClass("overlay--show");
}















