const bcrypt = require('bcryptjs')

function hashPswd(pswd){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(pswd, salt)
}

// let passHash = hashPswd('admin')

function comparePswd(pswd, hash){
    return bcrypt.compareSync(pswd, hash)
}

// let checkPass = comparePswd('aldkjf', passHash)
// console.log(checkPass)

module.exports = {
    hashPswd,
    comparePswd
}