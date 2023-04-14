const imagenes = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg' ];

(function () {
    'stict mode';
    const divv = document.querySelector('div');
    const imgElement = document.createElement('img');
    let iterador = 1

    imgElement.style.height = '300px';
    imgElement.style.width = '300px';
    imgElement.src = `image${iterador}.jpg`
    
    divv.appendChild(imgElement);
    
    const btns = document.querySelectorAll('button');
    
    const nextBtn = btns[0];
    const lastBtn = btns[1];
    
    nextBtn.addEventListener('click', function () {
        
        if (iterador < imagenes.length) {
            iterador++;
            imgElement.src = `image${iterador}.jpg`
        } else {
            iterador = 1
            imgElement.src = `image${iterador}.jpg`
        }

    })
})()