import './App.css'
import { useState, useRef } from 'react'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
function App() {
  const initialValue = [
    {
      id: 0,
      isDone: false,
      content: "React공부하기",
      date: new Date().getTime()
    },
    {
      id: 1,
      isDone: false,
      content: "헬스하기",
      date: new Date().getTime()
    },
    {
      id: 2,
      isDone: false,
      content: "짐정리하기",
      date: new Date().getTime()
    }
  ];
  const [todos, setTodos] = useState(initialValue);
  const nextId = useRef(3);
  const changeCheckbox = (targetId) => {
    setTodos((prev) => 
      prev.map((item) => 
        item.id === targetId
        ? {...item, isDone: !item.isDone}
        : item
      )
    )
  }
  const addTodos = (newContent) => {
    setTodos((prev) => 
      [...prev, {
        id: nextId.current++,
        isDone: false,
        content: newContent,
        date: new Date().getTime()}]
    )
  }
  const deleteTodos = (targetId) => {
    setTodos((prev) => 
      prev.filter(item => item.id !== targetId)
    )
  }
  return (
    <div className='App'>
      <Header/>
      <Editor addTodos = {addTodos}/>
      <List 
        todos = {todos} 
        changeCheckbox = {changeCheckbox} 
        deleteTodos = {deleteTodos}
      />
    </div>
  )
}

export default App
