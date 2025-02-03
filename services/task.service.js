const Task = require("../models/task.model");

class TaskService{
    find = () => Task.find({});
    create = (payload) => Task.create(payload);
    update = (id, payload) => Task.findByIdAndUpdate(id, payload,{new:true});
    delete = (id) => Task.findByIdAndDelete(id); 
}
module.exports = TaskService;