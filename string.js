const client=require('./client');

async function init(){
    await client.set('msg:3','hello world');
    const result1=await client.get('user:1'); 
    const result2=await client.get('msg:3');
    console.log("result->",result1);
    console.log("result2->",result2);
}

init();