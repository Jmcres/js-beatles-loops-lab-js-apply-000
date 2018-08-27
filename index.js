// add solution here

function theBeatlesPlay(arr1, arr2){
  var empty = [];
  for(var i = 0; i<arr1.length; i++){
    empty.push(arr1[i]+" "+"plays the"+" "+arr2[i]);
  }
  return empty;
}