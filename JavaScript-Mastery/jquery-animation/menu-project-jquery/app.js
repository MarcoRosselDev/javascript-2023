(function () {
    'use strict';

    //$('.liClass').next().css('display', 'none');

    /* $('.liClass').click(function (e) {
        e.preventDefoult
        console.log(this);
    }) */

    $('ul li ul').hide()
    $('.liClass').click(function () {
        console.log($(this).next('ul').toggle());
    })
})()