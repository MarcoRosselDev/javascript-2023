(function () {
    'strict mode';
    //const a = document.querySelectorAll('p')[3];
    const a = document.querySelector('#main p:last-of-type')
    // :last-of-type es una subclase en css

    a.style.color = 'red';
    a.style.fontSize = '24px';
    console.log(a);
})()