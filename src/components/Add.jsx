import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVedio } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({setuploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video,setVideo]=useState({
    id:"",
    caption:"",
    url:"",
    embededLink:""

  });
  const embededVideoLink=(e)=>{
    const {value}=e.target;
    const link=`https://www.youtube.com/embed/${value.slice(-11)}`
    console.log("link for embedding video");
    console.log(link);
    setVideo({...video,embededLink:link})
  }
  const handleUpload=async()=>{
    const {id,caption,url,embededLink}=video;
    if(!id || !caption ||!url ||!embededLink){
      toast.warning("please fill the form completely")
    }
    else{
      const response=await uploadAllVedio(video);
      console.log(response);
      if(response.status==201){
        toast.success(`${response.data.caption}is successfully uploaded`) 
        setuploadVideoStatus(response.data);      
        handleClose();
      }
      else{
        toast.error("something went wrong")
      }
    }
  }
  return (
    <>
    <div className='d-flex align-item-center'>
        <h5>upload new video</h5>
        <i class="fa-solid fa-cloud-arrow-up ms-3 mt-2" style={{color:"white"}} onClick={handleShow}></i>
    </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"23px"}}><i class="fa-solid fa-film text-warning me-3"></i>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='border border-secondary p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter vedio Id"  onChange={(e)=>setVideo({...video,id:e.target.value})}  />
      </Form.Group>
      
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter vedio caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter vedio Image url"  onChange={(e)=>setVideo({...video,url:e.target.value})} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter youtube vedio Link"  onChange={(e)=>embededVideoLink(e)}/>
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="primary" className='btn btn-warning' onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center'theme='colored'autoClose={2000}></ToastContainer>
    </>
  )
}

export default Add