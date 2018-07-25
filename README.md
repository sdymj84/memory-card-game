# memory-card-game
March pairs from the card
- 3rd practice project
- Language : HTML, CSS, Javascript
- Framework : jQuery

---

- Things that I got errors and spent quiet a time to figure out what was wrong :

1. css psudo class cannot be controled on Javascript because they are not a real class
 so if you want to remove .somthing:hover , you should remove .something class

2. jQuery delay() can only apply to animation(), not addClass or removeClass stuff
 instead, use setTimeout( function(), 2000 ); to delay the function

3. bind / unbind is useful to toggle events on certain elements

---

- Lesson Notes : jQuery

1. createTextNode > appendChild vs assign with textContent
 * createTextNode > appendChild
 - can be used when you have specific text and not yet decided where to put it
 - can concat text to existing element

 * textContent
 - can be used when you have specific text and you know where to put it
 - cannot concat text, it only overwrites

2. children vs childNodes 
   firstElementChild vs firstChild
   lastElementChild vs lastChild

: the first ones only select elements but the second ones select everything includes text and white spaces
 (white spaces are considered as text and text are considered as node)

children[0] == firstElementChild
children[children.length-1] == lastElementChild
childNodes[0] = firstChild
childNodes[childNodes.lenght-1] = lastChild

3. Polyfill
if not classList: use className

4. clientWidth / clientHeight : only viewable part excluding border

5. jQeury on method
jQuery - $element.on("event event2 event3 ..", function() {});
 (can add multiple events)
Javascript - element.addEventListener("event", function() {});
 (can add only one event)

6. Event bubbling, capturing, delegation
- bubbling : event propagation from bottom to top (addEventListener true)
- capturing : event propagation from top to bottom  (addEventListener false (default))
- delegation: add an event on parent element and control children so that it can control dynamically added children elements

7. useful code
$element.attr("disabled", true).addClass("disabled");   // when there's css class called "disabled"