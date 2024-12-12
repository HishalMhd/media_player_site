import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI'










function History() {

  const deleteHistory=async(videoId)=>{

    try {
      await deleteHistoryAPI(videoId)
      getAllHistory() 
    } catch (err) {
      console.log(err);
      
      
    }


  }

  const [history,setHistory]=useState([])
  console.log(history);
  



  useEffect(()=>{

    getAllHistory()
  },[])
  


  const getAllHistory=async()=>{
    try {
      const result=await getHistoryAPI()
      setHistory(result.data)
      
    }
      catch (err) {
      console.log(err);
      

      
    }
  }
  
  return (
    <>
    
    <div className='container d-flex justify-content-between my-5'>

      <h5 className=' text-warning fw-bold'>Watch History</h5>
      <h5 className=''>Back to <span><Link to={'/home'} className='fw-bold text-warning text-decoration-none'>Home</Link></span></h5>

    </div>

    {
      history?.length>0 ?
      <table className='table container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>Date</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>

        {

          history?.map(video=>(

            <tr key={video?.id}>
              <td>{video?.id}</td>
              <td>{video?.caption}</td>
              <td><a href={video?.youtubeUrl}>{video.youtubeUrl}</a></td>
              <td>{video?.formatedData}</td>
              <td><button className='btn' onClick={()=>deleteHistory(video.id)}><i className='fa-solid fa-trash text-warning '></i></button></td>


            </tr>

          ))





        }
      </tbody>

    </table>
    :
    <div >
      <h3 className='ps-5 ms-5 text-white' style={{marginTop:"150px"}}>No videos watched yet</h3>
    </div>
    }

    </>
  )
}

export default History