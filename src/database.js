import mongoose from 'mongoose'

var dbUrl = 'mongodb+srv://root:NQy7eITXKwCNlmVk@cluster0.dff0u.mongodb.net/test'

mongoose.connect(dbUrl)
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))