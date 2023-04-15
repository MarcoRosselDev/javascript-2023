/*      Challenge 10
Use jQuery to change the color of paragraph that
contains “Llamas and Chickens!” to red.
*/

(function () {
    'use strict';

    $("#main p:contains(Llamas and Chickens!)").css("color", "red");
})()