const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO_TO_LIST":
      console.log(state);
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "CHANGED":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload) {
            return todo.status === "true";
          } else return todo.status === "false";
        }),
      };
    /*case "REMOVE_TODO_FROM_LIST":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };*/
    default:
      return state;
  }
};

export default mainReducer;
