/*
 *  The 1st method
 */

function valueExtract(input) {
	var arrTemp = [];

    for(const [key, value] of Object.entries(input)) {
		if (typeof(value) === 'object' ) {
			arrTemp = valueExtract(value);
		}
		else if (value !== undefined && value !== null){
			arrTemp = [value];
		}
        else {
            arrTemp = [];
        }
		arrTemp.push(key);

        return arrTemp;
	}
}


function createObject(base, arr) {
	let lastName = arr.pop();

	for(var i = 0; i < arr.length-1; i++) {
		base = base[arr[i]] = base[arr[i]] || {};
	}

	base[arr[i]] = lastName;
}


const reverse1 = (input) => {
    var output = {};

	createObject(output, valueExtract(input));

    return output;
};

/*
 *  The 2nd method
 */

function reverse2Core(input, output) {
    for(const [key, value] of Object.entries(input)) {
		if (typeof(value) === 'object' ) {
            if (Object.keys(output).length === 0) {
                output = {key};
            }
            else if (Object.keys(output)[0] === "key") {
                output[key] = output["key"];
                delete output["key"];
            }
            else {
                output = {[key]: output};
            }

            return reverse2Core(value, output);
		}
		else if (value !== undefined && value != null) {
			output = {[key]:output};
			output = {[value]:output};

            return output;
		}

	}

}


const reverse2 = (input) => {
    var output = {};
    return reverse2Core(input, output);
}

module.exports = { reverse1, reverse2 };
