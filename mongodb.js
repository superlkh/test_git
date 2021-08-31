var mongoose = require('mongoose')

async function connected() {
    try {
        await mongoose.connect('mongodb://localhost:27017/freefruits', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("sucess")
    }
    catch (error) {
        console.log("failed")
    }
}

connected()

















