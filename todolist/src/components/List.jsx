import TodoList from "./todoList";
const List = ({todos}) => {
    return(
        <div>
            <input type="text" placeholder="검색할거"/>
            {
                todos.map((todo)=>{
                    return(<TodoList key={todo.id} todo = {todo}/>);
                })
            }
        </div>
    )
}
export default List;