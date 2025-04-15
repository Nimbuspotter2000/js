//reduce

const myNumbs = [1, 2, 3]

// const myTotal = myNumbs.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

// const myTotal = myNumbs.reduce( (acc, currval) => acc + currval, 0)

//console.log(myTotal);




const shoppingCart = [
    {
        iteName: "js course",
        price: 2999
    },
    {
        iteName: "py course",
        price: 1999
    },
    {
        iteName: "data science",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);


