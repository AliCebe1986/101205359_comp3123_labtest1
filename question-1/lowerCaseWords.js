function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            return reject("Input is not an array");
        }
        const filtered = arr.filter(item => typeof item === 'string').map(str => str.toLowerCase());
        resolve(filtered);
    });
}


lowerCaseWords(["PIZZA", 10, true, 25,false,"Wings"])
    .then(result => console.log(result)) 
    .catch(error => console.log(error));