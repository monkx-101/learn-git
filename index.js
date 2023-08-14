let condt=true
const promise=new Promise((resolve,reject)=>{
    if(condt===true) resolve("success")
    else reject("failed")
})
promise
    .then(result=>console.log(result))
    .catch(error=>console.log(error))