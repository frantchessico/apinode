const TodoModel = require('../models/Todo.model');


module.exports = {
    async newTodo(req, res) {
        const { title, description, author } = req.body;

        const todo = new TodoModel({
            title,
            description,
            author
        })

        await todo.save()
        .then(todo => {
            return res.status(200).json(todo)
        }).catch(err => {
            return res.json(err)
        })
    },

   async getTodos(_, res) {
      await TodoModel.find()
      .then(todos => {
          return res.status(200).json(todos)
      }).catch(err => {
          return res.json(err)
      })  
    },

  async getOneTodo(req, res) {
      const { id } = req.params;

      await TodoModel.findById(id)
      .then(todo => {
          return res.status(200).json(todo)
      }).catch(err => {
          return res.json(err)
      })
    },

    async updateTodo(req, res) {
        const { title, description, author } = req.body;
        const { id } = req.params;
        await TodoModel.findById(id)
        .updateOne({
           title,
           description,
           author 
        }).then(msg => {
            return res.status(200).json(msg)
        }).catch(err => {
            return res.json(err)
        })
    },
    async deleteTodo(req, res) {
        const { id } = req.params;
        await TodoModel.findById(id)
        .deleteOne()
        .then(() => {
            return res.status(200).json({success: 'Your todo has been deleted successfully'})
        }).catch(err => {
            return res.json(err)
        })
    }
}