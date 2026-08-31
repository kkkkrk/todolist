import './todoItem.css'
const TodoItem = ({todo, changeCheckbox}) => {
    const onChangeHandle = () => {
        changeCheckbox(todo.id);
    }
    return (
        <div className="TodoItem">
            <input 
                type="checkbox" 
                checked={todo.isDone} 
                readOnly
                onChange={onChangeHandle}
            />
            <p>{todo.content}</p>
            <p>{new Date(todo.date).toLocaleDateString('ko-KR')}</p>
            <button>삭제</button>
            
        </div>
    )
}
export default TodoItem;