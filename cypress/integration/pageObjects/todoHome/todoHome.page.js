class Todo{
    get todoList(){
        return '.todo-list li'
    }

    get enterTodo(){
        return '[data-test=new-todo]'
    }
}
module.exports = new Todo()