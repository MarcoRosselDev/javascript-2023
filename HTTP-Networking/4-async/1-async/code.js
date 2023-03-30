/*  Assignament
To help us visualize how asynchronous code executes, 
let's practice with an example from our game. 
Keep in mind that you probably wouldn't normally use 
setTimeout to change the order in which text is printed to the console, 
but it's a good way for us to practice async code.

Update the waiting durations so that text is printed in the following order:

Firing up the forge...
Smelting Iron Bars...
Combining Materials...
Shaping Iron...
Iron Longsword Complete!
The time required to complete a round of crafting is 2 seconds, 
so make sure none of the wait times are greater than 2000 ms. 
*/

const smeltingIronBarsWait = 0
const combiningMaterialsWait = 600
const shapingIronWait = 700
const craftingCompleteWait = 800

// Don't touch below this line

setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait)
setTimeout(() => console.log('Combining Materials...'), combiningMaterialsWait)
setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait)
setTimeout(() => console.log('Shaping Iron...'), shapingIronWait)

console.log('Firing up the forge...')

sleep(2500)
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

/* log

Firing up the forge...
Smelting Iron Bars...
Combining Materials...
Shaping Iron...
Iron Longsword Complete!

*/