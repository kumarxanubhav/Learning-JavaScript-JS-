const accountId = 144553
let accountEmail = "anubhav@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState

// accountId = 2 not allowed

console.log(accountId);

accountEmail = "ak@ak.com"
accountPassword = "678910"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/