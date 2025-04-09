const accountId = 144553
let accountEmail = "anand@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

accountEmail = "abhi@google.com"
accountPassword = "3452"
accountCity = "Bengaluru"

// accountId = 2 //not allowed

console.log(accountId);

/*
prefer not to use var
because of issue in block scope
and functional scope
*/

console.table([accountId, accountEmail, accountPassword,accountCity, accountState])