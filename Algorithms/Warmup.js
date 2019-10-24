function solveMeFirst(a, b) {
    return a+b   
}

function simpleArraySum(ar) {
    let count = 0
    for (let i = 0; i < ar.length; i++){
        count += ar[i]
    }
    return count
}

function compareTriplets(a, b) {
    let alice = 0
    let bob = 0
    
    a.forEach((score, idx) => {
        if(score > b[idx]) alice++
        else if(score < b[idx]) bob++
    })

    return [alice,bob]
}

function aVeryBigSum(ar) {
    let count = 0
    for(let i = 0; i<ar.length; i++){
        count += ar[i]
    }
    return count
}

function diagonalDifference(arr) {
    let diagonal = 0
    let counter = arr.length - 1
    for(let i = 0; i < arr.length; i++){
        diagonal += arr[i][i]
        diagonal -= arr[i][counter]
        counter--
    }

    return Math.abs(diagonal)
}

function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zeroes = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) positive++
        if(arr[i]<0) negative++
        if(arr[i]===0)zeroes++
    }

    positive /= arr.length
    negative /= arr.length
    zeroes /= arr.length

    console.log(positive.toFixed(6))
    console.log(negative.toFixed(6))
    console.log(zeroes.toFixed(6))
}

function staircase(n) {
    let counter = n - 1
    for(let i = 0; i < n; i++){
        let string = ''
        while(string.length < counter){
            string += ' '
        }
        while(string.length < n){
            string += '#'
        }

        counter--
        console.log(string)
    }
}

function miniMaxSum(arr) {
    let max = arr[0]
    let min = arr[0]
    let sum = arr[0]

    for(let i = 1; i < arr.length; i++){
        if(arr[i]>max) max = arr[i]
        if(arr[i]<min) min = arr[i]

        sum += arr[i]
    }

    console.log(sum - max, sum - min)
}

function birthdayCakeCandles(ar) {
    let max = ar[0]
    let count = 1

    for(let i = 1; i < ar.length; i++){
        if(ar[i] > max){
            max = ar[i]
            count = 1
        } else if(ar[i]===max) count++
    }
    return count
}

function timeConversion(s) {
    let convert = false
    let hours = s.slice(0,2)

    if(s[8]==='A' && hours==='12' || s[8]==='P' && hours !== '12'){
        convert = true
    } 

    if(!convert) return s.slice(0,8)
    else {
        let newTime = +s.slice(0,2) + 12
        if(newTime === 24) newTime = '00'

        return "" + newTime + s.slice(2,8)
    }
}