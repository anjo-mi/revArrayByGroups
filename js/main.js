function dataReverse(data) {
    let straight8s = []
    let reversed = []
    for (let i = 0 ; i < data.length ; i+=8){
      straight8s.push(data.slice(i, i+8))
    }
    for (let i = straight8s.length - 1 ; i >= 0 ; i--){
        reversed = reversed.concat(straight8s[i])
    }
    return reversed
  }
  dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])