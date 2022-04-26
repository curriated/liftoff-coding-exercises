function minMax(arr) {
	let maxIndex = arr.length -1;
  let minIndex = 0;
  arr.sort(function(a,b){return a - b});
  let minMaxArray = [arr[minIndex], arr[maxIndex]];
  return minMaxArray;
}
