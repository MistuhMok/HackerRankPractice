function icecreamParlor(m, arr) {
    const ans = {}
    for(let i = 0; i < arr.length; i++){
        if(ans[arr[i]]>=0) return [ans[arr[i]], i + 1]

        ans[m - arr[i]] = i + 1
    }
}