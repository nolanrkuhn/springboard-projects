function extractValue(arr, key) {
    arr.reduce(function(acc, next) {
        acc.push(next[key])
        return acc
    })
}

function vowelCount(str) {
    const vowels = 'aeiou'
    return str.split("").reduce(function(acc,next) {
        let lowerCasedLetter = next.toLowerCase()
        if(vowels.indexOf(lowerCasedLetter) !== -1) {
            if(acc[lowerCasedLetter]){
                acc[lowerCasedLetter]++;
            } else {
                acc[lowerCasedLetter] = 1;
            }
        }
    })

}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, next, i) {
        acc[i][key] = value
        return acc
    },arr)
}

function partition(arr, callback) {
    return arr.reduce(function(acc, next) {
        if(callback(next)) {
            acc[0].push(next)
        }
        else {
            acc[1].push(next)
        }
        return acc
    }, [[],[]])
}
