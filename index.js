function iterativeLog(array){
  var i = 0
  array.forEach(number =>{
    console.log(`${i}: ${number}`)
    i++;
  })
}

function iterate(callback){
  array = [1,2,4];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback);
}
