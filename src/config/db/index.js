const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://duyka6203:123@duyka.vexxcg6.mongodb.net/courses_dev',
            {
                // useNewUrlParser: true,
                // useUnifiedTopology: true,
                // useFindAndModify: false
            },
        );
        console.log('Connect successfully!');
    } catch (error) {
        console.log('Fail!');
    }
}

module.exports = { connect };
