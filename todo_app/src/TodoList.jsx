import React ,{useState} from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props) => {
    const [line,setLine] = useState(false);
    const cutLine = () => {
        setLine(true);
    }

    return(
        <>
            <li id={props.id} style={{textDecoration:line ? "line-through" : "none"}}>
                <IconButton className="del-btn" color="secondary" onClick={ cutLine /*() => {props.onSelect(props.id)}*/}>
                    <DeleteIcon/>
                </IconButton>
                {props.text}
            </li>
        </>
    )
}

export default TodoList;