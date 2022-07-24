//7kyu-- friend or foe?
function friend(friends){
const frr = friends.filter(val=>{return val.length == 4}
 );
  return frr;
}

console.log(friend(['kanu','jin','abcd']));