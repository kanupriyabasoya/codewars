// 7kyu -Sum of all the multiples of 3 or 5
function findSum(num){
    let total=0;
 for(let i=1;i<=num;i++){
    if(i%3===0 || i%5===0){
        total += i;
    }
 }
 return total;
}
console.log(findSum(3));