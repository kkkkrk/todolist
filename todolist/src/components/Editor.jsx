import { useRef } from "react";
const Editor = ({addTodos}) => {
    const inputRef = useRef("");
    const onCLickHandle = () => {
        addTodos(inputRef.current.value);
    }
    return(
        <div>
            <input ref = {inputRef} type="text" placeholder="새로운 todo"/>
            <button onClick={onCLickHandle}>추가</button>
        </div>
    )
}
export default Editor;