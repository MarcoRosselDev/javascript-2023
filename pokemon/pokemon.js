export async function pokemon(name) {

    try {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        const data = await request.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};