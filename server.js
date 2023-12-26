const express=require('express');
const axios=require('axios').default;
const client=require('./client');
const app=express();

app.get('/',async(req,res)=>{
    //to speed up we wil use cache value ie redis
    const cacheValue=await client.get('todos');

    if(cacheValue) return res.json(JSON.parse(cacheValue));


    const {data}=await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    
    await client.set('todos',JSON.stringify(data));
    await client.expire('todos',30); // expire 30 seconds
    return res.json(data);
});

app.listen(8080,()=>{
    console.log('listening on port 8080');
});