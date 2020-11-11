import React, {useReducer} from "react";
import { Container, Header, Content, Body, Title } from "native-base";
import ToDoList from './TodoList'

export const TodosContext = React.createContext()

const todosInitialState = {
  todos: [
    { id: 1, text: "finishing writing hooks chapter" },
    { id: 2, text: "play with kids" },
    { id: 3, text: "Read bible" },
  ],
};

function todosReducer(state, action){
  switch(action.type){
    default: return todosInitialState
  }
}

export default function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState)
  return <TodosContext.Provider value={{state, dispatch}}>
    <ToDoList />
</TodosContext.Provider> }
