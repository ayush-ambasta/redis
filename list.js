const client=require('./client');

async function init(){
    await client.lpush('message',1);
    await client.lpush('message',2);
    await client.lpush('message',3);
    await client.lpush('message',4);

    const result=await client.rpop('message');
    const res=await client.lrange('message',0,2);
    console.log(res);
    console.log(result);
}

init();