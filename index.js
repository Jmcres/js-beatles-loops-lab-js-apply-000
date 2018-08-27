// add solution here

function theBeatlesPlay(arr1, arr2){
  var empty = [];
  for(var i = 0; i<arr1.length; i++){
    empty.push(arr1[i]+" "+"plays"+" "+arr2[i]);
  }
  return empty;
}


function johnLennonFacts(arr1) {
  var empty =[];
  var i = 0;
  while (i <arr1.length){
    empty.push(arr1[i]+"!");
    i++
  }
  return empty;
}