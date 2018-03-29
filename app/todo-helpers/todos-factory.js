export default $resource => {

  let todoList = $resource("./app/todo-helpers/todo-list.json").query(
    { method: "GET" },
    response => {
      return response;
    }
  );

  return {
    getTodos() {
      return todoList;
    },
    addTodo(text, content) {
      todoList.push({
        id: Date.now(),
        text,
        content,
        created: new Date().toJSON(),
        done: false
      });
    },
    toggleDone(todo) {
      todo.done = !todo.done;
    },
    editTodo(todo) {
      const todoIndex = todoList.findIndex(item => item.id === todo.id);
      todoList.splice(todoIndex, 1, todo);
    },
    removeTodo(todo) {
      todoList.splice(todoList.indexOf(todo), 1);
    }
  };
};
