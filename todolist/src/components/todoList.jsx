import './todoList.css'
const TodoList = ({todo}) => {
    return (
        <div className="TodoList">
            <input type="checkbox" checked={todo.isDone} readOnly/>
            <p>{todo.content}</p>
            <p>{new Date(todo.date).toLocaleDateString('ko-KR')}</p>
            <button>삭제</button>
        </div>
    )
}
export default TodoList;