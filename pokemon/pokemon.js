export async function pokemon(name) {
    
    const pokeDiv = document.querySelector('.pokeDiv'); 

    try {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        const data = await request.json();

        pokeDiv.innerHTML = `
        <p>name : ${data.name}</p>
        `

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};