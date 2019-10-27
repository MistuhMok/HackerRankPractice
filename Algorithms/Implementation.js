function gradingStudents(grades) {
    const results = []
    for(let i = 0; i < grades.length; i++){
        let mod = grades[i] % 5

        if(grades[i] < 38 || mod <= 2){
            results.push(grades[i])
        } else results.push(grades[i] + 5 - mod)
    }

    return results
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    //s, t are Sam's house location
    //a, b are the 2 trees location
    //apples, oranges are throw distance arrays
        let appleCount = 0
        let orangeCount = 0
    
        for(let i = 0; i < apples.length; i++){
            let appleThrow = apples[i] + a
            if(appleThrow >= s && appleThrow <= t) appleCount++
        }
    
        for(let j = 0; j < oranges.length; j++){
            let orangeThrow = oranges[j] + b
            if(orangeThrow <= t && orangeThrow >= s) orangeCount++
        }
    
        console.log(appleCount)
        console.log(orangeCount)
    }

    function kangaroo(x1, v1, x2, v2) {
        if(v2 < v1) {
            while(x1 <= x2){
                if(x1 === x2) return('YES')
                x1 += v1
                x2 += v2
            }
        }
        return('NO')    
    }
