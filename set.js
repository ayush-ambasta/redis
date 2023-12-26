const client=require('./client');

async function init(){

    await client.sadd('ip',1);
    await client.sadd('ip',1);
    await client.sadd('ip',3);
    await client.sadd('ip',4);
    await client.sadd('ip',2);
    
    console.log(await client.sismember('ip',3));
    await client.srem('ip',3);
    console.log(await client.sismember('ip',3));
}

init();