const jwt = require('jsonwebtoken')

const token = function(payload){
    return jwt.sign(payload, process.env.SECRET)
}

// console.log(
//     token({
//         id:1,
//         email:'mail.com'
//     })
// )

module.exports = token