
function valueExtract(input) {
	var arrTemp = []
	for(const [key, value] of Object.entries(input)) {
		if (typeof(value) === 'object' ) {
			arrTemp = valueExtract(value)
		}
		else if (value !== undefined && value !== null){
			arrTemp = [value];
		}
        else {
            arrTemp = [];
        }
		arrTemp.push(key)
		return arrTemp
	}
}


function createObject(base, arr) {
	let lastName = arr.pop()

	for(var i = 0; i < arr.length-1; i++) {
		base = base[arr[i]] = base[arr[i]] || {};
	}

	base[arr[i]] = lastName
}


const reverse = (input) => {
    var output = {};

	createObject(output, valueExtract(input));

    return output;
};

module.exports = { reverse };
