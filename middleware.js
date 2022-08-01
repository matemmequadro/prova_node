const middlewareProva=(req,res,next)=>{
    const{method,url,requestTime}=req
    console.log(method,url,requestTime)
    next()
}
const auth=(req,res,next)=>{
    const {user}=req.query
    if(user=='"Luca'){
        next()
    }else{
        res.status(401).send("non auth")
    }
    console.log("accesso affettuato")
}
module.exports=middlewareProva,auth;