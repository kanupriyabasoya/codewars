function desOrder(n){
    n = String(n);
    const a = n.split('');
    const b = a.map((num)=> Number(num));
    const c =b.sort((a,b)=>b-a);
   return c.join('');
}

console.log(desOrder(0));