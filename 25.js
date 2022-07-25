//7 kyu convert an array of binary number into normal number
const binaryArrayToNumber = arr => {
   const value =+arr.join('');
    return parseInt(value,2);
  };
  console.log(binaryArrayToNumber([0,1,0,1]));