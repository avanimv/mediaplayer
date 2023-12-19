import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHistory, getHistory } from "../services/allAPI";
import Button from "react-bootstrap/esm/Button";
function Watchhistory(){
    const [history,setHistory]=useState([])
    const [deleteHistoryItem,setDeleteHistory]=useState(false)
    const getAllhistory=async()=>{
        const response=await getHistory();
        console.log("======history data=========");
        console.log(response);
        setHistory(response.data);
    }
    useEffect(()=>{
        getAllhistory();
        setDeleteHistory(false)
    },[deleteHistoryItem])
    const handleDelete=async(id)=>{
        const response=await deleteHistory(id);
        setDeleteHistory(true) 
    }
    return(
        <>
        <div className="container mt-5 d-flex justify-content-between align-item-center mb-5">
            <h3>Watch History</h3>
            <Link style={{color:"white", textDecoration:"none"}} to={'/home'}><i class="fa-solid fa-arrow-left me-2"></i>Back to Home</Link>
        </div>
        <table className="table mt-5 mb-5 container">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Caption</th>
                    <th>URL</th>
                    <th>Time</th>
                </tr>
            </thead>
          {  <tbody>
                {
                    history.length>0?
                    history.map((item)=>(

                    
                     <tr>
                     <td>{item.id}</td>
                     <td>{item.caption}</td>
                     <td>{item.embededLink}</td>
                     <td>{item.timeStamp}</td>
                     <td>{<Button varient="danger" onClick={()=>handleDelete(item.id)}>
                        <i class="fa-solid fa-trash"></i></Button>}</td>
                 </tr>

                    ))
                :
                <p>no item to display</p>
            }
              
            </tbody>}
        </table>
        </>
    )
}
export default Watchhistory;