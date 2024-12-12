import commonAPI from "./commonAPI";
import server_url from "./serviceUrl";


// api call for add video details

export const addVideoAPI=async(video)=>{

    return await commonAPI("post",`${server_url}/allvideos`,video)


}



// api call for get videos

export const getVideoApi=async()=>{
    
    return await commonAPI("get",`${server_url}/allvideos`,"")
}




// api call for delete videocard

export const deleteVideoAPI=async(videoId)=>{
    return await commonAPI("DELETE",`${server_url}/allvideos/${videoId}`)
}


// api call for add watch history

export const saveWatchHistory=async(videoDetails)=>{
    return await commonAPI("post",`${server_url}/watchhistory`,videoDetails)
}



// api call for get watch history

export const getHistoryAPI=async()=>{
    return await commonAPI("get",`${server_url}/watchhistory`,"")
}



// api call to delete watch history

export const deleteHistoryAPI=async(videoId)=>{
   return await commonAPI("delete",`${server_url}/watchhistory/${videoId}`,{})
}



// api call to add category

export const addCategoryAPI=async(categoryDetails)=>{

    return await commonAPI("post",`${server_url}/category`,categoryDetails)

}


// api call to get all category

export const getCategoryAPI=async()=>{
    return await commonAPI("get",`${server_url}/category`,"")
}



// api call to delete category

export const deleteCategoryAPI=async(categoryId)=>{
    return await commonAPI("delete",`${server_url}/category/${categoryId}`,{})
 }





// api call for getting single video
export const getSingleVideoAPI=async(videoId)=>{
    return await commonAPI("get",`${server_url}/allvideos/${videoId}`,"")
}


// api call for updating category

export const updateCategoryAPI=async(categoryId,categoryDetails)=>{
    return await commonAPI("put",`${server_url}/category/${categoryId}`,categoryDetails)
}


// api call to get single video from category

export const getSingleCategoryAPI=async(categoryId)=>{
    return await commonAPI("get",`${server_url}/category/${categoryId}`,"")
}