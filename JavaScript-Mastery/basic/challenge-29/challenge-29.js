/*      Challenge 29
Create the HTML & CSS as
shown.

Write a script that changes
the class on the body tag
for each 500 pixels the user
scrolls. At 500px down the
page the body gets class
two, and at 1000 it gets
class three, etc.

You can use if/else
statements, but try using a
switch statement!
*/

const bodyy = document.querySelector('body')
let pageTop;
window.addEventListener('scroll', function () {
    pageTop = window.pageYOffset;

    if (pageTop < 500) {
        bodyy.className = 'one'
    } else if (pageTop < 1000) {
        bodyy.className = 'two'
    } else if (pageTop < 1500) {
        bodyy.className = 'three'
    } else if (pageTop < 2000) {
        bodyy.className = 'four'
    } else if (pageTop < 2500) {
        bodyy.className = 'five'
    }
})