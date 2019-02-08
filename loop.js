const maxRow = 2;
const maxCol = 2;

function loopCount() {
	let arr = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];

	for(let row=0; row<=maxRow; row++) {
		for(let col=0; col<=maxCol; col++) {
			exam(row, col, arr);	
		}
	}

	let sum = arrSum(arr);

	console.log(arr);
	console.log(sum);	
}

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'object')
      sum += arrSum(arr[i]);
    else
      sum += arr[i];
  }
  return sum;
}

function exam(row, col, arr) {
	let sum = 0;

	// top left
	sum = addUp(row-1, col-1, arr, sum);

	// top
	sum = addUp(row-1, col, arr, sum); 

	// top right
	sum = addUp(row-1, col+1, arr, sum);
 
	// left
	sum = addUp(row, col-1, arr, sum); 

	// right
	sum = addUp(row, col+1, arr, sum);

	// bottom left
	sum = addUp(row+1, col-1, arr, sum); 

	// bottom
	sum = addUp(row+1, col, arr, sum);

	// bottom right
	sum = addUp(row+1, col+1, arr, sum);
   
	arr[row][col] = sum; 
}

function addUp(row, col, arr, sum) {
	if(canAddUp(row, col, arr)) {
        sum += 1;
    }

	return sum;
}

function canAddUp(row, col, arr) {
	if(isBound(row, col)) { 
        if(isNotRepeat(row, col, arr)) {
			return true;   
        }
    }

	return false;
}


function isNotRepeat(row, col, arr) {
	if(arr[row][col] === 0)
		return true;
	else
		return false;
}

function isBound(row, col) {
	if(row < 0 || row > maxRow)
		return false;

	if(col < 0 || col > maxCol)
		return false;

	return true;
}

loopCount();
