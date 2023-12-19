import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { addCategory, getAllCategory, getVideoDetails, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import { deleteCategory } from '../services/allAPI';
import Videocard from './Videocard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isDelete, setisDelete] = useState([])

  const [allCategory, setAllCategory] = useState([])
  const deleteCategoryItem = async (id) => {
    const response = await deleteCategory(id);
    setisDelete(response);

  }



  const [category, setCategory] = useState({
    id: "",
    name: "",
    allVideos: []
  })
  const getCategoryFromDB = async () => {
    const response = await getAllCategory();
    const { data } = response;
    setAllCategory(data);
    console.log(allCategory);
    console.log("1234s");
    console.log(allCategory);

  }
  useEffect(() => {
    getCategoryFromDB();
  }, [isDelete])

  const uploadCategory = async () => {
    const { id, name } = category;
    if (!id || !name) {
      toast.warning("please fill the form completely")
    }
    else {
      const response = await addCategory(category);
      console.log(response);
      if (response.status == 201) {
        toast.success(`${response.data.name} is successfully uploaded`)
        handleClose();
        getCategoryFromDB();
      }
      else {
        toast.error("something went wrong")
      }
    }
  }
  // console.log("category details");
  // console.log(category);
  const dragOver = (e) => {
    e.preventDefault();// to prevent page refresh ,by default onDragOver will do page refresh
    console.log("drag over");
  }
  const videoDrop = async (e, id) => {
    console.log(`video card need to be placed in card with id ${id}`);
    const videoid = e.dataTransfer.getData('videoId')
    console.log(`video with id ${videoid} need to placed in category with id ${id}`);
    const response = await getVideoDetails(videoid);
    const { data } = response;
    console.log("videodetails");
    console.log(data);
    const selectedCategory = allCategory?.find((item) => item.id == id);
    console.log("selected category", selectedCategory);
    selectedCategory.allVideos.push(data)
    console.log("selected category with dragged video details");
    console.log(selectedCategory);
    await updateCategory(id, selectedCategory);
    getCategoryFromDB();
    console.log("jkkll");
    console.log(allCategory);


  }
  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}>Add new category</button> </div>
      {
        allCategory?.length > 0 ?
          allCategory.map((item) => (
            <div className='d-grid ' style={{ width: "275px" }} droppable onDragOver={(e) => dragOver(e)}
              onDrop={(e) => videoDrop(e, item.id)}>
              <div className='mt-3 border border-secondary rounded p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h6>{item.name}</h6>
                  <button className='btn btn-danger'><i class="fa-solid fa-trash" onClick={() => deleteCategoryItem(item.id)}></i></button>
                </div>
                <Row>
                  {/* <Col sm={12}>
                    {
                      item?.allVideos?.length > 0 ?
                        item?.allVideos.map(video => (<Videocard displayVideo={video} />))
                        :
                        <p>no item</p>
                    }
                  </Col> */}
                </Row>
              </div>
            </div>
          )

          )
          :
          <p>Nothing to Display</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "23px" }}><i class="fa-solid fa-pencil text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          <Form className='border border-secondary p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter category Id" onChange={(e) => setCategory({ ...category, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter category name" onChange={(e) => setCategory({ ...category, name: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={uploadCategory} className='btn btn-warning'>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
    </>
  )
}

export default Category