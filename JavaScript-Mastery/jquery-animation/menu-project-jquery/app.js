(function () {
    'use strict';

    //$('.liClass').next().css('display', 'none');

    /* $('.liClass').click(function (e) {
        e.preventDefoult
        console.log(this);
    }) */

    $('ul li ul').hide()
    $('.liClass').click(function () {
        const thisMenu = $(this).next('ul');
        $('ul li ul').not(thisMenu).hide();
        thisMenu.toggle();
    })
})()