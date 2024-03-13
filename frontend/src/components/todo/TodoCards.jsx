import "./todo.css"
import { MdAutoDelete,MdBrowserUpdated } from "react-icons/md";
function TodoCards({title,body,id,delid,func}){
    return (
        <div className="p-3 todo-card">
            <div>
                <h5>{title}</h5>
                <p className="todo-card-p">{body.split("",77)}</p>
            </div>
            <div className="d-flex justify-content-between">
                <div className=" d-flex justify-content-center align-items-center xy" onClick={()=>{
                    delid(id)
                }}><MdAutoDelete className="Icons del"/>Delete</div>
                <div className=" d-flex justify-content-center align-items-center xy" onClick={()=>{func("block")}}><MdBrowserUpdated className="Icons"/>Update</div>
            </div>
        </div>
    )
}
export default TodoCards;