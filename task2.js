// 20 build in method
// 1. concat()
// method dari array untuk menggabungkan dua atau lebih array
// CONTOH PENGGUNAAN:
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const combined = arr1.concat(arr2, arr3);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 2. every()
// method dari array yang mengembalikan nilai false apabila menemukan satu elemen yang tidak memenuhi kondisi. 
// jika sebaliknya, akan mengembalikan nilai true.
// CONTOH PENGGUNAAN:
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// Expected output: true

// 3. fill()
// method dari array untuk mengisi semua elemen array dengan nilai statis dari indeks awal hingga indeks akhir.
// CONTOH PENGGUNAAN:
const fill1 = [1, 2, 3, 4];
console.log(fill1.fill(0, 2, 4));
// Expected output: [1, 2, 0, 0]

// 4. find()
// method dari array untuk mengembalikan nilai dari elemen pertama dalam array yang memenuhi kondisi yang diberikan.
// jika nilai tidak ditemukan, maka akan mengembalikan undefined.
// CONTOH PENGGUNAAN:
const find1 = [5, 12, 8, 130, 44];
const found = find1.find(element => element > 10);
console.log(found);
// Expected output: 12 

// 5. join()
// method dari array untuk menggabungkan semua elemen array menjadi sebuah string.
const elJoin = ["Fire", "Air", "Water"];
console.log(elJoin.join());
// Expected output: "Fire,Air,Water"
console.log(elJoin.join(""));
// Expected output: "FireAirWater"
console.log(elJoin.join("-"));
// Expected output: "Fire-Air-Water"

// 6. pop()
// method dari array untuk menghapus elemen terakhir dari array.
// CONTOH PENGGUNAAN:
const pop1 = [1, 2, 3];
pop1.pop()
console.log(pop1);
// output: [1, 2]

// 7. push()
// method array untuk menambahkan satu atau lebih elemen ke akhir array.
const animals = ["pigs", "goats", "sheep"];
const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

// 8. reverse()
// method dari array untuk membalik urutan elemen dalam array. hsil pembalikan akan mengubah array asli.
// CONTOH PENGGUNAAN:
const rev1 = ['one', 'two', 'three'];
const reversed = rev1.reverse();
console.log(reversed);
// Expected output: Array ['three', 'two', 'one']

// 9. slice()
// method dari array untuk menyalin sebagian bagian dari array ke dalam array baru tanpa mengubah array asli.
// CONTOH PENGGUNAAN:
const slice1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(slice1.slice(2));
// Expected output: Array ['camel', 'duck', 'elephant']

// 10. sort()
// method dari array untuk mengurutkan elemen array dan mengembalikan referensi ke array yang sama.
// CONTOH PENGGUNAAN:
const monthsort = ['March', 'Jan', 'Feb', 'Dec'];
monthsort.sort();
console.log(monthsort);
// Expected output: Array ['Dec', 'Feb', 'Jan', 'March']

// 11. splice()
// method dari array untuk menambahkan atau menghapus/menganti elemen dari array.
// CONTOH PENGGUNAAN:
const splice1 = [1, 2, 3, 4, 5];
splice1.splice(2, 0, 'a');
console.log(splice1);
// Expected output: [1, 2, 'a', 3, 4, 5]

// 12. toSpliced()
// untuk melakukan splice tanpa mengubah array asli.

// 13. toReversed()
// untuk membalik array tanpa mengubah array asli.

// 14. toSorted()
// untuk mengurutkan array tanpa mengubah array asli.

// 15. unshift()
// method dari array untuk menambahkan satu atau lebih elemen ke awal array.
// CONTOH PENGGUNAAN:
const unshift1 = [1, 2, 3];
unshift1.unshift(4, 5);
console.log(unshift1);
// Expected output: [4, 5, 1, 2, 3]

// 16. shift()
// method dari array untuk menghapus elemen pertama dari array.
// CONTOH PENGGUNAAN:
const shift1 = [1, 2, 3];
shift1.shift();
console.log(shift1);
// Expected output: [2, 3]

// 17. with()
// method dari array untuk mengembalikan salinan array dengan nilai pada indeks tertentu diganti dengan nilai baru.
// CONTOH PENGGUNAAN:
const with1 = [10, 20, 30, 40];
const newArray = with1.with(2, 99);
console.log(newArray);
// Expected output: [10, 20, 99, 40]

// 18. Object.assign()
// method dari object untuk menyalin nilai dari satu atau lebih object sumber ke object target.
// CONTOH PENGGUNAAN:
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);
// Expected output: Object { a: 1, b: 4, c: 5 }

// 19. Object.keys()
// method dari object untuk mengembalikan array yang berisi nama properti (keys) dari object.
// CONTOH PENGGUNAAN:
const objKeys = { a: 1, b: 2, c: 3 };
console.log(Object.keys(objKeys));
// Expected output: Array ['a', 'b', 'c']

// 20. Object.create()
// method dari object untuk membuat object baru menggunakan object yang sudah ada sebagai prototype.
// CONTOH PENGGUNAAN:
const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const me = Object.create(person);
me.name = 'Matthew';
me.isHuman = true;
me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"


// 5 build in function 

// 1. isFinite()
// function untuk menentukan apakah nilai yang diberikan adalah bilangan hingga (finite number) atau bukan.
// CONTOH PENGGUNAAN:
console.log(isFinite(15));      // true

// 2. isNaN()
// function untuk menentukan apakah nilai yang diberikan adalah NaN (Not-a-Number) atau bukan.
console.log(isNaN('hello'));   // true

// 3. parseFloat()
// function untuk menguraikan string dan mengembalikan angka desimal (floating point number).
// CONTOH PENGGUNAAN:
const str = "3.14 meters";
const num = parseFloat(str);
console.log(num); // Expected output: 3.14

// 4. parseInt()
// function untuk menguraikan string dan mengembalikan angka bulat (integer).
// CONTOH PENGGUNAAN:
const str2 = "42";
const num2 = parseInt(str2);
console.log(num2); // Expected output: 42

// 5. encodeURI()
// function untuk mengkodekan URI dengan menggantikan setiap karakter yang tidak valid dengan satu atau lebih escape sequence.
// CONTOH PENGGUNAAN:
const uri = "https://examle.com/this is a test";
const encodedURI = encodeURI(uri);
console.log(encodedURI);
// Expected output: "https://example.com/this%20is%20a%20test"