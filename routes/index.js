const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index',{title:'express-handlebars'})
})

router.get('/route',(req,res)=>{
    res.send('respond with a resource')
})


module.exports = router