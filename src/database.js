import mongoose from 'mongoose'

mongoose.connect(process.env.DBURL)
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))