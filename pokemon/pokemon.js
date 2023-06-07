export async function pokemon(name) {
    
    const pokeDiv = document.querySelector('.pokeDiv'); 

    try {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        const data = await request.json();

        pokeDiv.innerHTML = `
        <p>name : ${data.name}</p>
        <img src="${data.sprites.front_default}" alt="pokemon ${data.name}">pokemon ${data.name}
        <img src="${data.sprites.other["official-artwork"].front_default}" alt="pokemon ${data.name}">
        <img src="${data.sprites.other["official-artwork"].front_shiny}" alt="pokemon ${data.name}">
        `
        // add another try catch to ask if this pokemon have evolution or not

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};