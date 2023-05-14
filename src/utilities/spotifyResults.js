const limitResults = (results) => {
    return results.slice(0, 3)
}

function cleanResults(results, input) {
    // filters results to only include them if their descriptions includes the input
    // then returns only 8 results for now to limit page size. 
    return results.filter(r => r.description.includes(input)).slice(0, 8)
}

function convertInput(input) {
    // converts an input with spaces into a string that the API query can use
    let newString = ''
    for (let char of input) {
        if (char === ' ') {
            newString += '+'
        } else {
            newString += char
        }
    }
    return newString
}

export { limitResults, cleanResults, convertInput }