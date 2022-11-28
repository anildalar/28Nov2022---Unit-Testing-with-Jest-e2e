const TodoModel = require("../models/todoModel");


//HOF
let homeController = (req,res)=>{
    res.status(200).send('Hi 3');
}
let homeController2 = (req,res)=>{
    console.log(req.body);

    
    const todo = new TodoModel(req.body);
    todo.save().then(() => console.log('Saved Successfully'));


    res.status(200).send('Hi 44');
}

//1. Default

//2. Named

module.exports = {
                    homeController,
                    homeController2,
                }