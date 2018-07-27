/*=======================================================
    Variables
========================================================*/
let n = 4;
const imageCount = n*n/2;
let finishTime = 0;
let fcCount = 0;


/*=======================================================
    Execute at load
========================================================*/
showMessage("PRESS TO START");
$("#runner").runner();



/*=======================================================
    Events
========================================================*/
$(".overlay_message").on("click", startButtonEvent);



/*=======================================================
    Functions
========================================================*/
function gameStart() {
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

    $(".card:not(.bound)").addClass("bound").bind("click", openCardEvent);
}

// Click event function on card
function openCardEvent() {
    var cardOpened = $(this).removeClass("card--closed").addClass("card--opened");
    
    // Action when card is opened
    // 1. Check if currently opened card is one or two
    var cardOpenedCount = $(".card").not(".card--closed, .card--revealed").length;
    
    // 2. If one : save "background image name" into "card1"
    if (cardOpenedCount == 1) {
        $(".card:not(.bound)").addClass("bound").bind("click", openCardEvent);
        card1 = $(this);
    
    // If two : block event when click > compare image with previously opened one
    //        > if they are not the same, close both cards
    //        > if they are the same, leave them opened and unbind event on those 2 cards
    } else if (cardOpenedCount == 2) {
        $(".card.bound").removeClass("bound").unbind("click");
        card2 = $(this);
        
        if (card1.css("background-image") != card2.css("background-image")) {
            $("#fc_count").text(++fcCount);
            setTimeout(function() {
                card1.addClass("card--closed").removeClass("card--opened");
                card2.addClass("card--closed").removeClass("card--opened");
                $(".card:not(.bound)").addClass("bound").bind("click", openCardEvent);
            }, 800);
        } else {
            $(".card:not(.bound)").addClass("bound").bind("click", openCardEvent);
            card1.addClass("card--revealed").removeClass("card").unbind();
            card2.addClass("card--revealed").removeClass("card").unbind();

            if ($(".card--revealed").length == n*n) {
                // When completed, create text "Completed!" and append it to overlay message
                finishTime = $("#runner").runner("stop");
                showMessage("Completed!<br>Click to replay");
            }
        }
    }
}

function startButtonEvent() {
    fcCount = 0;
    n = $(".dropdown").val();
    $(".overlay").removeClass("overlay--show");
    // Clear the table first
    $("#card-container").empty();

    gameStart();
    $("#runner").runner("reset");
    $("#runner").runner("start");
    $("#fc_count").text(fcCount);
}

function showMessage(message) {
    $(".overlay_message").html(message);
    $(".overlay").addClass("overlay--show");
}















