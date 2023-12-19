import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landingpage(){
    return(
        <div className='container mb-5 mt-5'>
             <Row className='d-flex align-item-center justify-content-evenly'>
        <Col>
        <h3>welcome to <span className='text-warning'> media player</span></h3>
        <p style={{textAlign:"justify"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Incidunt distinctio veniam dolore blanditiis corrupti sit earum quidem officiis illo,
             molestias fugiat quo ex, commodi aperiam sunt expedita alias ullam quasi?</p>
             <Link to={'/home'}>
             <button className='btn btn-warning mt-5'>Get Started</button>
             </Link>
        </Col>
        <Col>
        <img className='mt-5' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" style={{height:"300px"}} />
        </Col>
      </Row>
      <div className='container'>
         <h3>Features</h3>
       <div className='d-flex align-item-center justify-content-evenly mt-5 mb-5'>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       </div>
       <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
       <Row className='d-flex align-item-center justify-content-evenly'>
        <div className='col-md-6' >
         <h3 className='text-warning'>simple and powerful</h3>
         <p style={{color:"white"}}><span className='fw-bolder fs-5'>play everything:</span>
         <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae excepturi inventore iste ratione vel consequuntur totam,
           aut numquam ex veritatis odit asperiores provident quos, culpa doloremque. Eos numquam enim voluptatem!</span></p>
           <p style={{color:"white"}}><span className='fw-bolder fs-5'>play everything:</span>
         <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae excepturi inventore iste ratione vel consequuntur totam,
           aut numquam ex veritatis odit asperiores provident quos, culpa doloremque. Eos numquam enim voluptatem!</span></p>
           <p style={{color:"white"}}><span className='fw-bolder fs-5'>play everything:</span>
         <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae excepturi inventore iste ratione vel consequuntur totam,
           aut numquam ex veritatis odit asperiores provident quos, culpa doloremque. Eos numquam enim voluptatem!</span></p>
           </div>
        <div className='col-md-6'>
        <iframe width="100%" height="380" src="https://www.youtube.com/embed/VAdGW7QDJiU" title="JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
       </Row>
       </div>
      </div>
        </div>
    )
}
export default Landingpage;