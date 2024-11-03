const accountId = 12345
let accountEmail ="divesh@gmail.com"
var accountPassword ="2345"
accountCity= "Agra"
let accountState;
/*not to use var because of the block scope and functional scope issue */
//can simply change
accountEmail ="patel@gmail.com"
accountPassword="4545"
accountCity="surat"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])