import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getSingleCategoryAPI, getVideoApi, updateCategoryAPI } from '../Services/allAPI'








function View({addVideoResponse,deleteVideoResponseFromCat,setUpdatecatfromView}) {

  const [deleteVideoResponse,setDeleteVideoResponse]=useState("")


  const [allVideos,setAllVideos]=useState([])
  console.log(allVideos);
  
  useEffect(() => {
    getAllVideos()
  
    
  }, [addVideoResponse,deleteVideoResponse,deleteVideoResponseFromCat])
  





   const getAllVideos=async()=>{
   try {

    const result=await getVideoApi()
    if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
    }
    
   } catch (err) {
    console.log(err);
    
    
   }
    
  }

  const dragOverCategory=(e)=>{
    e.preventDefault()
  }

  const dropCategoryVideo=async(e)=>{
    const {videoDetails,categoryId}=JSON.parse(e.dataTransfer.getData("shareData"))
    console.log(`videoDetails:${videoDetails} and category id:${categoryId}`);


    
  try {
    const {data}=await getSingleCategoryAPI(categoryId)
    console.log(data);
    const updatedCategoryAllVideos=data.allVideos.filter(item=>item.id!=videoDetails.id)
    console.log(updatedCategoryAllVideos);
    
    const {id,categoryName}=data

    const response=await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryAllVideos})
    console.log(response);

    setUpdatecatfromView(response)

    await addVideoAPI(videoDetails)
    getAllVideos()


    
    
    
    
  } catch (err) {
    console.log(err);
    
    
  }
  }
  

  




  return (
    <>
    <Row droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>dropCategoryVideo(e)}>
        {
          allVideos?.length>0 ?
          
          allVideos?.map(video=>(
            <Col lg={4} sm={6} xs={12}>
        <VideoCard videoDetails={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        
        </Col>
          ))
        :
        <div className='text-danger text-center'>
          Nothing to Display
        </div>
        }
    </Row>
    </>
  )
}

export default View