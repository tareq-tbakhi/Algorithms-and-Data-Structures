
function linearSearch(list, target){
  let result = null;
  //returns the index position of the target, else returns None
  for(let i = 0; i < list.length; i++){
    if (list[i] === target){
      result = i;
    }
  }
  return result;
};



function verify(index){
  if(index !== null){
    console.log(`target found at index: ${index}`)
  }else{
    console.log("target not found");
  }
};


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = linearSearch(numbers, 9)

verify(result);
