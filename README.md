# memory-card-game
## Match pairs from the card
- 3rd practice project
- Language : HTML, CSS, Javascript
- Framework : jQuery

--- 

## Version 1.1
    Added stopwatch and failed counts

## Version 1.0
    Basic memory game. no additional feature
    You can replay after complete

---

## Things that I got errors and spent quiet a time to figure out what was wrong :

1. css psudo class cannot be controled on Javascript because they are not a real class
 so if you want to remove .somthing:hover , you should remove .something class

2. jQuery delay() can only apply to animation(), not addClass or removeClass stuff
 instead, use setTimeout( function(), 2000 ); to delay the function

3. bind / unbind is useful to toggle events on certain elements

4. Issue : card images are not showing when open cards.
    Cause : main.js - $(this).css("backgroundImage", "url('../img/" + images[i] + "')")
    => .css() will create inline css attributes on html file so relative url should be based on html file, not based on js file that the code is written.

    Resolution : removed "../" from css url

5. on below statement, test1 doesn't work and test2 works because test1 function is declared as variable and variable can be used only after it's decalred.
    
    $("sth").on("click", test1);
    $("sth").on("click", test2);
    
    var test1 = function() {} 
    function test2() {}





---

## Lesson Notes : jQuery

1. ### createTextNode > appendChild vs assign with textContent
 
    ### createTextNode > appendChild
    - can be used when you have specific text and not yet decided where to put it
    - can concat text to existing element

    ### textContent
    - can be used when you have specific text and you know where to put it
    - cannot concat text, it only overwrites

2. 
    ### children vs childNodes 
    ### firstElementChild vs firstChild
    ### lastElementChild vs lastChild

    : the first ones only select elements but the second ones select everything includes text and white spaces
 (white spaces are considered as text and text are considered as node)

<pre>
    children[0] == firstElementChild
    children[children.length-1] == lastElementChild
    childNodes[0] = firstChild
    childNodes[childNodes.lenght-1] = lastChild
</pre>

3. ### Polyfill
    - if not classList: use className

4. ### clientWidth / clientHeight : only viewable part excluding border

5. ### jQeury on method
    - jQuery - $element.on("event event2 event3 ..", function() {});
        - (can add multiple events)
    - Javascript - element.addEventListener("event", function() {});
        - (can add only one event)

6. ### Event bubbling, capturing, delegation
    - bubbling : event propagation from bottom to top (addEventListener true)
    - capturing : event propagation from top to bottom  (addEventListener false (default))
    - delegation: add an event on parent element and control children so that it can control dynamically added children elements

7. ### useful code
    $element.attr("disabled", true).addClass("disabled");       // when there's css class called "disabled"

8. ### How to maintain aspect ratio of responsive div
    use "padding-top" - padding top is calculated based on width. so as width chagnes, height is set dynamically (height equal to padding-top when height is not specifically decalred)