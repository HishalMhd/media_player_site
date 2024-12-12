import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoAPI, saveWatchHistory } from '../Services/allAPI';





function VideoCard({videoDetails,setDeleteVideoResponse,insideCategory}) {
  console.log(videoDetails);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    
    const {caption,youtubeUrl}=videoDetails

    const localTime=new Date()
    console.log(localTime);
    const formatedData=localTime.toLocaleString()
    const historyData={caption,youtubeUrl,formatedData}

    try {
      await saveWatchHistory(historyData)
    } catch (err) {
      console.log(err);
      
      
    }


    
    setShow(true)
  
  
  
  };


  const deleteVideo=async(videoId)=>{

    try {
      const result=await deleteVideoAPI(videoId)
      setDeleteVideoResponse(result.data)
    } catch (err) {
      console.log(err);
      
      
    }

  }


  const dragVideostarted=(e,videoId)=>{
    console.log(`on drag starts with video id: ${videoId}`);
    e.dataTransfer.setData("videoId",videoId)
    
    
  }



  return (
    <>
    <Card className='mt-3' draggable={true} onDragStart={(e)=>dragVideostarted(e,videoDetails?.id)}>
      <Card.Img onClick={handleShow} style={{height:"250px"}} variant="top" src={videoDetails?.imageUrl} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center justify-content-center'>
            <p className='me-3 mt-3'>{videoDetails?.caption}</p>
            { !insideCategory &&
                          <Button onClick={()=>deleteVideo(videoDetails?.id)} variant="warning"><i class="fa-solid fa-trash"></i></Button>

            }
            
            
        </Card.Title>
        
        
        
      </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{videoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='row'>
        <iframe  className='col rounded' width="766" height="480" src={videoDetails?.youtubeUrl} title="Armadham | Aavesham | Jithu Madhavan |Fahadh Faasil | Sushin Shyam | Vinayak| Nazriya| Anwar Rasheed"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </Modal.Body>
        
      </Modal>
    
    </>
  )
}

export default VideoCard