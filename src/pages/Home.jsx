import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'




function Home() {

  const [addVideoResponse,setAddVIdeoResponse]=useState("")
  const [deleteVideoResponseFromCat,setDeleteVideoResponseFromCat]=useState("")
  const [updatecatfromView,setUpdatecatfromView]=useState("")


  return (
    <>

    <div className='d-flex container my-5 justify-content-between'>
      <Add setAddVIdeoResponse={setAddVIdeoResponse}/>
      <Link to={'/history'} className='text-warning text-decoration-none fw-bold'>Watch History</Link>
 
    </div>

    <div className='container my-5 row ms-5 me-5'>
      <div className="col-lg-6">
        <h3 className=''>All videos</h3>
        <View addVideoResponse={addVideoResponse} deleteVideoResponseFromCat={deleteVideoResponseFromCat} setUpdatecatfromView={setUpdatecatfromView} />


      </div>
      <div className="col-lg-6">
        <Category setDeleteVideoResponseFromCat={setDeleteVideoResponseFromCat} updatecatfromView={updatecatfromView}/>
      </div>
    </div>
    </>
  )
}

export default Home