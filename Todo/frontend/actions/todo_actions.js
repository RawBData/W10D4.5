

export const RECEIVE_TODO_NAME = "RECEIVE_TODO"

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO_NAME,
    todo
  };
};

export const RECEIVE_TODOS_NAME = "RECEIVE_TODOS"

export const receiveTodos = (todos = []) => {
  return {
    type: RECEIVE_TODOS_NAME,
    todos
  };
};


