console.log('starting app');

setTimeout(()=>{
console.log("inside of call back")
},2000)


setTimeout(()=>{
    console.log("inside of call back again")
    },0)


console.log("finsihing up");