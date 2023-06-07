export async function pokemon(name) {

    try {
        const request = await fatch(`https://pokeapi.co/api/v2/ability/${name}/`);
        const data = await request.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
};