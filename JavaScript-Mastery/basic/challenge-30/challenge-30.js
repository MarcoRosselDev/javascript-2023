/*      Challenge 30
Change the HTML and CSS
to this, then write a script
that changes the class on
the body tag based on the
key that was pressed.

If someone presses a
different key, give them a
nasty alert message.

Use the switch statement
again.
*/

const bodyy = document.querySelector('body');

document.addEventListener('keydown', function(e) {
    
    const btnPressed = e.which;

    switch (btnPressed) {
        case 66:
            bodyy.className = 'one'
            break;
        case 86:
            bodyy.className = 'two'
            break;
        case 67:
            bodyy.className = 'three'
            break;
        case 70:
            bodyy.className = 'four' 
            break;
        case 71:
            bodyy.className = 'five'
            break;
    
        default:
            alert('preciona una letra de la lista !')
            break;
    }

})