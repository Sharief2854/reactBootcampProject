import {createSlice} from '@reduxjs/toolkit';

let todoSlice=createSlice({
    name:"todo",
    initialState:{
        arr:[
                
        ]
    },
    reducers:{
        addTodo:function(state,action){
            // console.log(action);
            state.arr.push(action.payload);
        },
        deleteTodo:function(state,action){
            state.arr.splice(action.payload,1);
        },
        setTodos:function(state,action){
            state.arr=action.payload;
        }
    }

});
console.log(todoSlice);

let { addTodo, deleteTodo, setTodos }=todoSlice.actions;
export { addTodo, deleteTodo, setTodos };

export default todoSlice;
