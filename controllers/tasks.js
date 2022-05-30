const Task = require('../models/Tasks')

const asyncWrapper = require('../middleware/async')



const getAllTasks = asyncWrapper( async (req, res) => {

    
        const tasks = await Task.find({})
        res.status(200).json({
            tasks
        })
    }
)



const createTask = asyncWrapper( async (req, res) => {

    
        const task = await Task.create(req.body)
        res.status(201).json({
            task
        })
    


}
)

const getTask =  async (req, res) => {

 const {id:taskID} = req.params

const task = await Task.findOne({_id:taskID})

if(!task){
    return res.status(404).json({msg: `No task with id: ${taskID}`})
}

res.status(200).json({taskID})
    
}

const updateTask = (req, res) => {

    res.send('update a task')
}

const deleteTask = (req, res) => {
    res.send('delete a rask')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}