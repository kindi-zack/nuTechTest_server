const router = require('express').Router()
const Controller = require('../controllers/controller')
router.get('/', (req, res)=>{
    res.status(200).json('hello')
})
router.post('/login', Controller.login)
router.get('/barang', Controller.showAll)
router.post('/barang', Controller.createBarang)

module.exports = router