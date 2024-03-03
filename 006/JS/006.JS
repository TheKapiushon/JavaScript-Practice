function Pass() {

    let result = ''
    for (let i = 0; result.length < 6; i++) {

        let ranNumOneThree = Math.floor(Math.random() * 3)
        let ranNumHun = Math.floor(Math.random() * 26) + 97
        let ranNumShe = Math.floor(Math.random() * 26) + 65
        let ranNum = Math.floor(Math.random() * 10)
        let ranChar = '!@#$'

        if (ranNumOneThree === 0) {
            result += String.fromCharCode(ranNumHun) + ranNum
        } else if (ranNumOneThree === 1) {
            result += String.fromCharCode(ranNumShe) + ranNum
        } else if (ranNumOneThree === 2) {
            result += String.fromCharCode(ranChar) + ranNum
        }
    }
    return result
}

const Password = Pass()
alert(Password)
