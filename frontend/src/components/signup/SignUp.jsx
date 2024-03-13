import Heading from "./Heading";
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./signUp.css"

function SignUp(){
    const [inputs,setInputs] = useState({email:"",username:"",password:""})
    const history=useNavigate();
    function func(e){
        const {name , value} = e.target;
        setInputs({...inputs,[name]:value})
    }
    async function submit(e){
        e.preventDefault();
        await axios.post(`${window.location.origin}/auth/register`,inputs)
        .then((res)=>{
            alert(res.data.msg)
            setInputs({email:"",username:"",password:""})
        })
        history("/signin")
        //console.log(inputs)
        
    }
    return (
        <div className="signup">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 colu d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column w-100 p-5">
                            <input className="p-2 my-3" name="email" type="email" placeholder="Enter your email" onChange={func} value={inputs.email}/>
                            <input className="p-2 my-3" name="username" type="text" placeholder="Enter your username" onChange={func} value={inputs.username}/>
                            <input className="p-2 my-3" name="password" type="password" placeholder="Enter your password" onChange={func} value={inputs.password}/>
                            <button className="btn-signup p-2" onClick={submit}>SignUp</button>
                        </div>
                    </div>
                    <div className="col-lg-4 colu  d-flex justify-content-center align-items-center">
                        <Heading first={"Sign"} second={"Up"}/>
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default SignUp;