const items = [1, 2, 3];

// const reversedItems = items.toReversed();
// console.log(reversedItems); // [3, 2, 1]
// console.log(items); // [1, 2, 3]
let temp = []

// Manual
for (let i = 0; i < items.length; i++) {
    temp [i]= items[items.length - 1 -i]    
}
console.log(temp);
