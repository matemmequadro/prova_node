const express=require('express')
const {persone}=require('../persone.js');

const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:persone})
   
})
router.get('/:id',(req,res)=>{
    const{id}=req.params
    const persona=persone.find(
        (persona)=>persona.id===id
    )
    res.json(persona)
   
})
router.post('/',(req,res)=>{
    console.log(req.body)
    const persona=req.body
    persone.push(persona)
    res.status(200).json({success:true,data:persone})
})
router.put('/:id',(req,res)=>{
    const{id}=req.params
    const index=persone.findIndex(persona=>persona.id===id)
    persone.splice(index,1)
    res.status(200).json({success:true,data:persone})
})

router.delete('/:id',(req,res)=>{
    const {id} =req.params
    const index=persone.findIndex(persona=>persona.id===id)
    persone.splice(index,1)
    res.status(200).json({success:true,data:persone})
})

module.exports=router