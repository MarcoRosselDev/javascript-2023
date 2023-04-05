/* Assignment

Our game designer wants us to build a "treasure chest"! We don't want to award players with too many items though, 
so let's limit the number of items our players receive by using the limit=x query parameter, 
where x is the number of records we are requesting from the server. We'll also continue to sort the items so that less valuable items are looted first.

Complete the lootTreasure function. It should add two query parameters to the URL passed to getItems:

sort
limit
Sort by the quality property.

Set the limit based on the rarity passed into lootTreasure.

Common treasure = 1 item
Rare treasure = 3 items
Legendary treasure = 5 items

--------------------------------------------------------
spa

¡Nuestro diseñador de juegos quiere que construyamos un "cofre del tesoro"! Sin embargo, 
no queremos premiar a los jugadores con demasiados artículos, 
así que limitemos la cantidad de artículos que reciben nuestros jugadores usando el parámetro de consulta limit=x, 
donde x es la cantidad de registros que estamos solicitando del servidor. 
También continuaremos clasificando los artículos para que los artículos menos valiosos sean saqueados primero.

Completa la función lootTreasure. Debería agregar dos parámetros de consulta a la URL pasada a getItems:

sort
limit
Sort by the quality property.

Establezca el límite según la rareza pasada a lootTreasure.

Common treasure = 1 item
Rare treasure = 3 items
Legendary treasure = 5 items
*/

async function lootTreasure(baseURL, rarity) {

    let limit = 0;
    if (rarity === "Common") {
        limit = 1;
    } else if (rarity === "Rare"){
        limit = 3;
    } else if (rarity === "Legendary") {
        limit = 5;
    }

    const fullURL = `${baseURL}?sort=quality&limit=${limit}`
    return await getItems(fullURL, apiKey)
}
// http://example.com?firstName=lane&lastName=wagner
// don't touch below this line

/* log successful


Looting common treasure chest...
Acquired a Light Leather with quality score: 1
---
Looting rare treasure chest...
Acquired a Light Leather with quality score: 1
Acquired a Gold Ore with quality score: 1
Acquired a Healing Potion with quality score: 4
---
Looting legendary treasure chest...
Acquired a Light Leather with quality score: 1
Acquired a Gold Ore with quality score: 1
Acquired a Healing Potion with quality score: 4
Acquired a Padded Leather with quality score: 6
Acquired a Copper Ore with quality score: 6


*/

const url = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'
const apiKey = generateKey()

const commonLoot = await lootTreasure(url, "Common")
console.log("Looting common treasure chest...")
for (const item of commonLoot) {
    console.log(`Acquired a ${item.name} with quality score: ${item.quality}`)
}
console.log("---")

const rareLoot = await lootTreasure(url, "Rare")
console.log("Looting rare treasure chest...")
for (const item of rareLoot) {
    console.log(`Acquired a ${item.name} with quality score: ${item.quality}`)
}
console.log("---")

console.log("Looting legendary treasure chest...")
const legendaryLoot = await lootTreasure(url, "Legendary")
for (const item of legendaryLoot) {
    console.log(`Acquired a ${item.name} with quality score: ${item.quality}`)
}

async function getItems(url, apiKey) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey
        }
    })
    return response.json()
}

function generateKey() {
    const characters = 'ABCDEF0123456789'
    let result = ''
    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}