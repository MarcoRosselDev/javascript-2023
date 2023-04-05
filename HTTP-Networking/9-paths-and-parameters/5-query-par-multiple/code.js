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