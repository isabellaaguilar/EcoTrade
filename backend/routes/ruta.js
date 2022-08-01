const express = require('express')
const router =express.Router()
const  startCreating  = require("../src/logic/nft");

 router.get('/generador',async  (req,res)=>{
    var x =  await startCreating();
    res.send({imagenes: x.dat,jsonContract:x.textPadre})
 })

  router.get('/',async  (req,res)=>{
    res.sendFile(__dirname +'/index.html')
 })


 module.exports = router