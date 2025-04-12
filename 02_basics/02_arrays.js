const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //dc_heros single element
// console.log(marvel_heros[3][1]); //flash
//js me array kisi bhi type ka data le leta hai even object like here array dc_heros

const allHeros =  marvel_heros.concat(dc_heros)
//push changes the original array but concat doesnot
//that it returns a new array
console.log(allHeros)


console.log("*************************************");
//another way to concat by spread operator (...)

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5,]]]
const real_another_array = another_array.flat(Infinity)
//flat me parameter hota hai to which depth we need to unwrap it 
//console.log(real_another_array)

console.log(Array.isArray("Anand")) //false
console.log(Array.from("Anand")); //[ 'A', 'n', 'a', 'n', 'd' ]
console.log(Array.from({name: "Anand"}))//[] gets congused ki keys ka array banana hai ya vlaues ka 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))



