import TodoItem from "./TodoItem";
import { useState } from "react";
const List = ({todos,changeCheckbox}) => {
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
                    return(<TodoItem key={todo.id} todo = {todo} changeCheckbox = {changeCheckbox}/>);
                })
            }
        </div>
    )
}
export default List;