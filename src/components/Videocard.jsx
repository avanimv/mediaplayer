import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteVideo } from '../services/allAPI';
function Videocard({displayVideo,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
     setShow(true);
     // call function to store details to watch history
     const {caption,embededLink}=displayVideo;
        console.log("video details");
        console.log(caption);
        console.log(embededLink);
        const today=new Date;
        const timeStamp=new  Intl.DateTimeFormat('en-us',{
          year:"numeric",
          month:"2-digit",
          hour:"2-digit",
          minute:"2-digit",
          second:"2-digit"
        }).format(today)
        console.log(timeStamp);
        let videoDetails={
          caption:caption,
          embededLink:embededLink,
          timeStamp:timeStamp
        }
        await addToHistory(videoDetails)
  };
  const removeVideo=async(id)=>{
    const response=await deleteVideo(id);
    console.log(response);
    setDeleteVideoStatus(true)
  }
  const dragStarted=(e,id)=>{
    console.log(`videocard with id ${id}  started dragging`);
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <>
    <Card style={{ width: '100%', height:'350px'}} className='mb-5 mt-5' draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
      <Card.Img height="285px" width="100%" variant="top" src={displayVideo.url} onClick={handleShow}/>
      <Card.Body>
       <div className='d-flex align-item-center justify-content-evenly'><h6>{displayVideo?.caption}</h6>
        <Button variant="danger" className='ms-2' onClick={()=>removeVideo(displayVideo?.id)}><i class="fa-solid fa-trash"></i></Button>
        </div>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="300" src={displayVideo.embededLink}  frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard