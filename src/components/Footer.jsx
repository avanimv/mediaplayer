import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='footer d-flex align-item-center justify-content-evenly w-100 mb-5'>
                <div style={{ width: "400px" }}>
                    <h4><i class="fa-solid fa-video text-warning me-4" ></i>Media player</h4>
                    <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum quidem culpa ratione aspernatur repellendus enim. Earum voluptates, architecto voluptatum quidem repellat voluptatibus nisi perferendis ducimus aperiam labore eius dolore?</h6>
                </div>
                <div>
                    <h4>Links</h4>
                    <Link to={'/'} style={{textDecoration:"none"}}>
                    <h6>Landing Page</h6></Link>
                    <Link to={'/home'}style={{textDecoration:"none"}}>
                    <h6>Home Page</h6></Link>
                    <Link to={'/watch'}style={{textDecoration:"none"}}>
                    <h6>Watch History</h6></Link>
                </div>
                <div>
                    <h4>Guides</h4>
                    <h6>React</h6>
                    <h6>ReactBootstrap</h6>
                    <h6>Bootswatch</h6>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <div className='d-flex'>
                        <input type="text" placeholder='enter your email' className='form-control' />
                        <button className='btn btn-warning ms-2'>Subscribe</button>
                    </div>
                    <div className='d-flex align-item-center justify-content-evenly fs-4 mt-3'>
                        <i class="fa-brands fa-instagram"style={{}}></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </div>


            <div className='text-center'>
                <p>copyright &#169; 2023. Media player build with React</p>
            </div>
        </>
    )
}

export default Footer