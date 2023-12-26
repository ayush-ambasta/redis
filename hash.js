const client=require('./client');

async function init(){
    const hash=await client.hset(
        'student:1',
        {
            name:'Ayush',
            batch:'2020',
            branch:'ECE',
            degree:'Btech'
        }
    )

    console.log(`Number of fields were added: ${hash}`);

    const name = await client.hget('student:1', 'name');
    console.log(`name: ${name}`);

    const student = await client.hgetall('student:1');
    console.log(student);
}

init();