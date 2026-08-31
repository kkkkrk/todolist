import TodoList from "./todoList";
import { useState } from "react";
const List = ({todos}) => {
    const [query, setQuery] = useState('');
    const onChangeHandle = (e) => {
        setQuery(e.target.value);
    }
    const filterTodos = (q) => {
        const keyword = q.trim().toLowerCase();
        return todos.filter((todo) => todo.content.toLowerCase().includes(keyword));
    }

    return(
        <div>
            <input value = {query} type="text" placeholder="검색할거" onChange={onChangeHandle}/>
            {
                filterTodos(query).map((todo)=>{
                    return(<TodoList key={todo.id} todo = {todo}/>);
                })
            }
        </div>
    )
}
export default List;