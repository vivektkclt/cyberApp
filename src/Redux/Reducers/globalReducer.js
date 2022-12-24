import {createSlice} from '@reduxjs/toolkit';
export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    loader: false,
    todoList: [
      {id: 1, content: 'Hit the gym'},
      {id: 2, content: 'Meet George'},
    ],
  },
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    addToDo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let {todoList} = state;
      state.todoList = todoList.filter(item => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      let {todoList} = state;
      state.todoList = todoList.map(item =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
  },
});
// Action creators are generated for each case reducer function
export const {addToDo, deleteToDo, editTodo, setLoader} = globalSlice.actions;
export default globalSlice.reducer;
