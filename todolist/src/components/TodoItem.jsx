import './todoItem.css'
const TodoItem = ({todo, changeCheckbox, deleteTodos}) => {
    const onChangeHandle = () => {
        changeCheckbox(todo.id);
    }
    const onClickHandle = () => {
        deleteTodos(todo.id);
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
            <button onClick={onClickHandle}>삭제</button>
            
        </div>
    )
}
export default TodoItem;