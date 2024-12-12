import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideoAPI } from '../Services/allAPI';




function Add({setAddVIdeoResponse}) {

  const [isInvalidUrl,setIsInvalidUrl]=useState(false)

  // holding videos details

  const [videoDetails,SetVideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})

  console.log(videoDetails);

  const uploadData=async()=>{
    const {caption, imageUrl, youtubeUrl}=videoDetails


    if(caption && imageUrl && youtubeUrl){


      try {
        const result= await addVideoAPI(videoDetails)
        
        if(result.status>=200 && result.status<300){
          
          setAddVIdeoResponse(result.data)
          
          toast.success(`${result.data.caption} is added to your Collection`)
          
          handleClose()
        }
        
        
      } catch (err) {
        console.log(err);
        
      }

      

    }
    else{
      toast.warning("Enter the Field Completely ")
    }
  }
  
  


  const getEmbedUrl=(url)=>{

    if(url.includes("v=")){
      const videoId=url.split("v=")[1].slice(0,11)

      SetVideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
    
      setIsInvalidUrl(false)

    }
    else{
      setIsInvalidUrl(true)
      SetVideoDetails({...videoDetails,youtubeUrl:""})
    }

  }
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
    <>
    <div>
    <h5 className='text-warning fw-bold'>Upload New Video <button onClick={handleShow} className='btn btn-warning rounded-circle ms-2 fw-bold'>+</button></h5>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6 className='mb-4'>Please fill the following details</h6>
            <div className='container border border-3 border-warning rounded'>
        
        {/* Caption */}

        <FloatingLabel controlId="caption" label="Caption"className="mb-3 mt-3" >
        <Form.Control onChange={e=>SetVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Caption" />
      </FloatingLabel>

      {/* image URL */}
      <FloatingLabel controlId="image" label="Image Url"className="mb-3" >
        <Form.Control onChange={e=>SetVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Image Url" />
      </FloatingLabel>
      
      {/* youtube URL */}
      <FloatingLabel controlId="url" label="Youtube Url" className="mb-3" >
        <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="text" placeholder="Youtube Url" />
      </FloatingLabel>

      { isInvalidUrl &&
        <div className='text-danger fw-bold fs-3'>Invalid Url</div>
      }




                
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={uploadData} >Upload</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Add