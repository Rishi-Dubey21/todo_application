function Update({func}){
    return(
        <>
        <div className="p-5 d-flex align-items-start flex-column update">
            <h3>Update Your Task</h3>
            <input type="text" className="update-inputs my-4 w-100 p-3" placeholder="Update Todo"/>
            <textarea type="text" id="" className="update-inputs w-100 p-3 mb-3"  placeholder="Update Body"/>
            <div>
            <button className="home-btn p-2">Update</button>
            <button className="home-btn p-2 mx-3" onClick={()=>{func("none")}}>Close</button>
            </div>
        </div>
        
        </>
    )
}
export default Update