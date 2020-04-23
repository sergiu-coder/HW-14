// const availableQuantity = 27;
// let orderedQuantity = prompt('What quantity of bananas you need?', '');

//  if (orderedQuantity <= availableQuantity) {
//     alert( 'Great, we will soon ship your order' );
// } else if (orderedQuantity > availableQuantity) {
//     alert( 'Sorry, we don’t have enough in stock' )
// }
// console.log (orderedQuantity); 



availableQuantity = 27;
let orderedQuantity = prompt('What quantity of bananas you need?', '')
orderedQuantity <= availableQuantity ?
    alert( 'Great, we will soon ship your order' )
 : 
    alert( 'Sorry, we don’t have enough in stock' )
;   
console.log (orderedQuantity); 