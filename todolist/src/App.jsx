import './App.css'
import { useState } from 'react'
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

  return (
    <div className='App'>
      <Header/>
      <Editor/>
      <List todos = {todos}/>
    </div>
  )
}

export default App
