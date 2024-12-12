import React from 'react'

function Footer() {
  return (
    <>
    

    <div className='d-flex ms-5 me-5' style={{marginTop:"200px"}} >
      <div className='w-50 ms-5'>
      <i class="fa-solid fa-music fs-3 ms-2"></i>
      <h3 className='ms-3 ' style={{display:"inline"}}>Media Player</h3>
        <h6 className='mt-3 me-4 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptate cumque eos illum dolore architecto asperiores dolores a maxime voluptates voluptas, facilis sequi! Animi quasi, ratione voluptatum voluptate sequi deleniti.</h6>
        <h6 className='mt-5'>code licensed luminar</h6>
        <h6>currently v5.3.2</h6>
      </div>
      <div className='w-25 ms-5 d-flex flex-column'> 
        <h4>Links</h4>
        <h6 className='mt-3'> <a href="" style={{textDecoration:"none"}} className='text-white'>Landing</a></h6>
        <h6> <a href="" style={{textDecoration:"none"}} className='text-white'>Home</a></h6>
        <h6> <a href="" style={{textDecoration:"none"}} className='text-white'>History</a></h6>
      </div>
      <div className='w-25 d-flex flex-column'> 
        <h4>guide</h4>
        <h6 className='mt-3'> <a href="" style={{textDecoration:"none"}} className='text-white'>React</a></h6>
        <h6> <a href="" style={{textDecoration:"none"}} className='text-white'>React Bootstrap</a></h6>
        <h6> <a href="" style={{textDecoration:"none"}} className='text-white'>React Router</a></h6>
        </div>
      <div className='w-25 me-5'> 
        <h5>contact</h5>
        <div className='d-flex'>
        <input className='form-control w-75' type="text" placeholder='Enter the email'/>
        <button className='btn btn-warning ms-2'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='d-flex justify-content-between me-4 mt-3 fs-5'>
        <a href='' className='text-white'><i class="fa-brands fa-facebook"></i></a>
        <a href='' className='text-white'><i class="fa-brands fa-twitter"></i></a>
        <a href='' className='text-white'><i class="fa-brands fa-instagram"></i></a>
        <a href='' className='text-white'><i class="fa-brands fa-linkedin"></i></a>
        <a href='' className='text-white'><i class="fa-brands fa-github"></i></a>
        <a href='' className='text-white'><i class="fa-solid fa-phone"></i></a>
        </div>
        </div>
    </div>
    <div className='text-center mt-5'><h6>Copyright <i class="fa-regular fa-copyright"></i> Aug batch 2024, Media Player. Build with react</h6>
    </div>
    </>
  )
}

export default Footer