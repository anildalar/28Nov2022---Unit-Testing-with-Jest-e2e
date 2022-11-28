const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)
.then((d)=>{
    console.log("Connected");
})
.catch((e)=>{
    console.log("Failed to connect ",e)
});

module.exports = mongoose;