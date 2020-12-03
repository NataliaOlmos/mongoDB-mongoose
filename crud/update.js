require('../connection')

const User = require('../models/User')

const someFunction = async () => {
    const user = await User.findOne({username: 'bee'});
    console.log(user)
    user.password = 'unanuevaclave';
    user.save(); 
}

const anotherUpdate = async () => {
   const user = await User.findOneAndUpdate({username: 'linda'},{
       name:'Linda Wilson'    
    },{new: true})
    console.log(user)
}


async function updateUsers(){
    const user = await User.update({username:'natu'},{
       password: '31000000'
    });

    console.log(user)
}

anotherUpdate();