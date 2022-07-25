//7kyu complementary dna
function dnaStrand(dna){

    let dnaCopy = Array.from(dna);

   for(let i=0; i<dnaCopy.length; i++){
    if(dnaCopy[i]  == 'A'){
     dnaCopy[i] = 'T';
    }else if(dnaCopy[i]  == 'T'){
        dnaCopy[i] = 'A';
    }else if(dnaCopy[i]  == 'C'){
        dnaCopy[i]  = 'G';
    }else if(dnaCopy[i]  == 'G'){
         dnaCopy[i]  = 'C';
    }
   }

   return dnaCopy.join('');
}
console.log(dnaStrand("ATCG"));