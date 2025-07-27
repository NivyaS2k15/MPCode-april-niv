import CommonAPI from "./commonApi"
import SERVERURL from "./serverURL"


//savevideo http post in Add component 

export const saveVideoAPI = async (videoDetails)=>{
 return  await CommonAPI(`POST`,`${SERVERURL}/uploadVideos`,videoDetails)

}


//getvideo with getmethod  called by view component

export const getAllVideoAPI = async ()=>{
 return  await CommonAPI(`GET`,`${SERVERURL}/uploadVideos`,"")

}


//savehistory post http method when the click on the video card 

export const saveHistoryAPI = async (historyDetails)=>{
 return  await CommonAPI(`POST`,`${SERVERURL}/history`,historyDetails)

}


//get historyAll method called by history component
export const getAllHistoryAPI = async ()=>{
 return  await CommonAPI(`GET`,`${SERVERURL}/history`,"")

}

//historydeleteApi = deleteapi https://localhost:6000/history/id 
// is worked in history page when button page
export const deleteHistoryAPI = async (id)=>{
 return  await CommonAPI(`DELETE`,`${SERVERURL}/history/${id}`,{})

}


// uploadvideo delete = delete method to http://localhost:3000/home/id called by videocard
//when clicked on delete button
export const removeUloadAPI = async (id)=>{
 return  await CommonAPI(`DELETE`,`${SERVERURL}/uploadVideos/${id}`,{})

}


//save category-post request  http://localhost:3000/categories when user click on add button

//categoryDeatils={categroyname,allVideos}


export const saveCategoryAPI = async (categoryDetails)=>{
 return  await CommonAPI(`POST`,`${SERVERURL}/categories`,categoryDetails)

}


// getAllCategoryApi = get method  called category component ,when component loaded in browser

export const getAllCategoryAPI = async ()=>{
 return  await CommonAPI(`GET`,`${SERVERURL}/categories`,"")

}

// delete category delete method to  http://localhost:3000/categories/id called by videocard
//when  category compoenent clicked on delete button 

export const deleteCategoryAPI = async (id)=>{
 return  await CommonAPI(`DELETE`,`${SERVERURL}/categories/${id}`,{})

}

//put update category api -using updsate[   PUT] method called by category component when 
// video drop over the category


// export const updateCategoryAPI = async (categoryDetails)=>{
//  return  await CommonAPI(`PUT`,`${SERVERURL}/categories/${categoryDetails.id}`,{categoryDetails})
// }

export const updateCategoryAPI = async (categoryDetails) => {
  return await CommonAPI(
    "PUT",
    `${SERVERURL}/categories/${categoryDetails.id}`,
    categoryDetails  // <- send the full object directly
  );
};