import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, getSingleVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';





function Category({setDeleteVideoResponseFromCat,updatecatfromView}) {



  const [categoryName,setCategoryName]=useState("")
  const [allCategory,setAllCategory]=useState("")

  console.log(allCategory);
  
  console.log(categoryName);


  useEffect(() => {
    getAllCategory()
  
  }, [updatecatfromView])
  


  const getAllCategory=async()=>{
    try{
      const result=await getCategoryAPI()
      console.log(result.data);
      setAllCategory(result.data)
     
    }
    catch(err){
      console.log(err);
      

    }
  }


  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const addCategory=async()=>{

    try{
      const result=await addCategoryAPI({categoryName,allVideos:[]})
      handleClose()
      getAllCategory()
    }
    catch(err){
      console.log(err);
      
    }
  }

  
  const deleteCategory=async(categoryId)=>{
    try {
      await deleteCategoryAPI(categoryId)
      getAllCategory()
    } catch (err) {
      console.log(err);
      
      
    }
  }

  const dropVideo=async(e,categoryId)=>{

    const videoId=e.dataTransfer.getData("videoId")
    console.log(`video gragged with id ${videoId} and dropped in the category with id ${categoryId}`);

    try {
      
      const {data}= await getSingleVideoAPI(videoId)
      console.log(data);

      const selectedCategory=allCategory?.find(category=>category.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);


      await updateCategoryAPI(categoryId,selectedCategory)
      getAllCategory()
      const response=deleteVideoAPI(videoId)
      setDeleteVideoResponseFromCat(response)
      
      

    } catch (err) {
      console.log(err);
      
      
    }
    

  }

  const dragOverCategory=(e)=>{
    
    e.preventDefault()
  }
  const videoDragStarted=(e,videoDetails,categoryId)=>{
    const shareData={videoDetails,categoryId}
    e.dataTransfer.setData("shareData",JSON.stringify(shareData))


    

    
  }

  return (
    <>
    <div className='d-flex justify-content-around'>
    <h3 className=''>All Category</h3>
    <button onClick={handleShow} className='btn btn-warning fw-bold rounded-circle ps-3 pe-3 mb-2 mt-2 me-5'>+</button>
    </div>

    {
      allCategory?.length>0 ?
      allCategory?.map(category=>(
        <div droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>dropVideo(e,category?.id)} className=' text-center border border-3 rounded border-white p-2 mt-3'>
          <h5 className='text-warning d-inline '>{category.categoryName}</h5>
          <button onClick={()=>deleteCategory(category.id)} className='btn'><i className='fa-solid fa-trash text-warning'></i></button>
         
         <div className='row mt-2'>
          
           {
            category.allVideos?.length>0 &&

            category.allVideos.map(video=>(
              <div draggable={true} onDragStart={(e)=>videoDragStarted(e,video,category.id)} key={video} className='col-lg-4'>

               <VideoCard videoDetails={video} insideCategory={true}/>
               
          

              </div>
              
              
            ))
            
           }
         </div>

        </div>
      ))
      :
      <div className='text-white fw-bold mt-3'>
        No category Added yet
      </div>
    }
      


    


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        
        <FloatingLabel controlId="Category" label="Category" className="mb-3" >
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
      </FloatingLabel>
      



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category