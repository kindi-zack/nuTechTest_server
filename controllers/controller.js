const {Barang, User} = require('../models')
const token = require('../helpers/jwt')
const {comparePswd} = require('../helpers/bcrypt')

class Controller{
    static login(req, res){
        const {username, password} = req.body

        User.findOne({
            where: {
                username
            }
        })
        .then(user=>{
            if(!user) throw {msg: 'wrong email or password'}

            const checkPass = comparePswd(password, user.password)
            if(!checkPass) throw {msg: 'wrong email or password'}
            
            // const {name, email, id} = user
            const access_token = token({
                id: user.id,
                username: user.username
            })
            res.status(200).json({
                access_token,
                // checkPass,
                // user
            })
        })
        .catch(err=>{
            res.status(400).json(err)
        })
    }

    static createBarang(req, res){
        // const {foto, nama, harga_beli, harga_jual, stok} = req.body
        const data = req.body
        // const data = {foto, nama, harga_beli, harga_jual, stok}
        Barang.create(data)
        .then(barang=>{
            res.status(201).json(barang)
        })
        .catch(err=>{
            res.status(400).json(err)
        })
    }

    static showAll(req, res){
        Barang.findAll()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err=>{
            res.status(400).json(err)
        })
    }
}

module.exports = Controller