require('./connection')

const User = require('./models/User')

async function createUsers(){
    const userOne = new User({
        username: 'userno',
        password: '12345'
    })
    await userOne.save();


    const userTwo = new User({
        username: 'linda',
        password: '67890'
    })
    await userTwo.save();
}

createUsers();