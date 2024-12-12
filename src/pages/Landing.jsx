import React from 'react'
import landingImg from '../assets/music.gif'
import Card from 'react-bootstrap/Card';
import manageImg from '../assets/image.png'
import filesImg from '../assets/filess.png'
import historyImg from '../assets/history.png'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='ms-5 me-5'>
    <div className='d-flex' style={{height:"500px"}}>
      <div className='w-50 ms-5 mt-5'>
        <h3 style={{fontFamily:'Edu AU VIC WA NT Pre'}}>Welcome to <span className='text-warning'>Media Player</span></h3>
        <h6 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur aperiam laudantium. Tempora perspiciatis eveniet, mollitia recusandae beatae animi corrupti nihil quidem ratione blanditiis magnam voluptatum minima molestiae ea facere?
          <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis officiis excepturi reprehenderit vero ullam ad, obcaecati, tempore ea vitae nisi quo. Culpa minus fugiat nostrum temporibus quis expedita enim asperiores.
        </h6>
        <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
      </div>
      <div className='w-50 mt-5 me-3'>
        <img className='h-75 rounded me-5'style={{float:"right"}} src={landingImg} alt="" />
      </div>
    </div>

    {/* features */}
    <div>
      <h3 className='text-center text-warning' style={{fontFamily:"Edu AU VIC WA NT Pre"}}>Features</h3>
      <div className='d-flex justify-content-around mt-5 mb-5'>
      {/* card 1 */}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={manageImg} />
      <Card.Body className='p-4 mb-4 mt-3'>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Users can upload,view and remove the videos
        </Card.Text>
      </Card.Body>
      </Card>
     {/* card 2 */}
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={filesImg} />
      <Card.Body className='p-4 mb-4 mt-3'>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Users can categorize the video by drag and drop feature
        </Card.Text>
      </Card.Body>
     </Card>
     {/* card 3 */}
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={historyImg} />
      <Card.Body className='p-4 mb-4 mt-3'>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can manage the watch history of all video
        </Card.Text>
      </Card.Body>
     </Card>
      </div>
    </div>
    <br />

    {/* next one */}

    <div className='container border border-3 border-white d-flex rounded'>
      <div className='w-50 mt-4 mb-3 ms-3'>
        <h3 className='text-warning' style={{fontFamily:"Edu AU VIC WA NT Pre"}}>Simple Fast and Powerful</h3>
        <br />
        <h4 className='fw-bold' style={{display:"inline"}}>Play Everything:</h4><h6 style={{display:"inline"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam iure libero rerum beatae quae blanditiis perspiciatis quibusdam nam natus, quos voluptatum modi aut, voluptas, nulla inventore! Nihil, dolorem recusandae.</h6><br /><br />

        <h4 className='fw-bold' style={{display:"inline"}}>Categorize Video:</h4><h6 style={{display:"inline"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam iure libero rerum beatae quae blanditiis perspiciatis quibusdam nam natus, quos voluptatum modi aut, voluptas, nulla inventore! Nihil, dolorem recusandae.</h6><br /><br />

        <h4 className='fw-bold' style={{display:"inline"}}>Manage History:</h4><h6 style={{display:"inline"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quisquam iure libero rerum beatae quae blanditiis perspiciatis quibusdam nam natus, quos voluptatum modi aut, voluptas, nulla inventore! Nihil, dolorem recusandae.</h6><br /><br /><br />

      </div>
      <div className='w-50'>

      <iframe className='w-100 h-100 p-5' width="560" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=5KvPfaWa5yQHouua" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


      </div>


    </div>

    </div>
  )
}

export default Landing