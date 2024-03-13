import { useState } from "react";
import "./todo.css"
import TodoCards from "./TodoCards";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Update from "./Update";
function Todo(){
    const [inputs,setInputs] =useState({title:"",body:""})
    const [array,setArray]=useState([])
    function change(e){
        const {name,value} = e.target;
        setInputs({...inputs,[name]:value})
    }
    function submit(){
        if(inputs.title === ""||inputs.body === ""){
            toast.error("Title or Body can't be empty");   
        }
        else{
            setArray([...array,inputs])
        setInputs({title:"",body:""})
        
        toast.success("Your task is added");
        toast.error("Your task is not saved ! pls signup or login");
        }
        
    }
    function del(id){
        array.splice(id,"1")
        setArray([...array])
    }
    function UpdateNow(val){
        document.getElementById("todo-update").style.display=val;
    }
    return (
        <>
        <div className="todo">
            <ToastContainer/>
            <div className="todo-main container d-flex justify-content-center align-items-center">
                
                <div className="d-flex flex-column todo-inputs w-50 mb-5">
                    <input type="text" placeholder="Title" name="title" /**/ className="my-2 p-2 baby" onClick={()=>{
                        document.getElementById("textarea").style.display="block";
                    }} onChange={change} value={inputs.title}/>
                    <textarea type="text" id="textarea" name="body" /**/ placeholder="Body" className="p-2 baby" onChange={change} value={inputs.body}/>
                    <button className="home-btn" onClick={submit}>Add Todo</button>
                </div>
            </div>
            <div className="todo-body">
                <div className="container-fluid">
                    <div className="row">
                        {
                            array && array.map((item,index)=>(
                                <div className="col-lg-3 mx-5 my-2">
                                    <TodoCards title={item.title} body={item.body} id={index} delid={del} func={UpdateNow}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="todo-update" id="todo-update">
            <div className="container update">
                <Update func={UpdateNow}/>
            </div>
        </div>
        </>
    )
}
export default Todo;