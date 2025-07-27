import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { VideoCard } from './VideoCard'
import { getAllVideoAPI, saveVideoAPI, updateCategoryAPI } from '../services/allAPI'



export const View = ({addResponsefromHome,deleteResponseFromCategory,setdeleteResponseFromView}) => {
    const[deleteVideoResponefromRemoveCard,setdeleteVideoResponefromRemoveCard]= useState("")

    const [allVideos,setallVideos]=useState([])

    useEffect(() => {
        getAllVIdeos()
    }, [addResponsefromHome,deleteVideoResponefromRemoveCard,deleteResponseFromCategory])


    const getAllVIdeos = async () => {
        try {
            const result = await getAllVideoAPI()
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                console.log(result.data);
                setallVideos(result.data)


            } else {
                console.log("unsuccessfull");

            }

        } catch (error) {
            console.log(error);


        }
    }
 
     const dragOVerView = (e)=>{
       e.preventDefault()
     }

     const categoryVideoDragOverView = async (e)=>{
     console.log("inside Category video drop over view");
     const{video,categoryDetails}= JSON.parse(e.dataTransfer.getData("dragData"))
     console.log( "video",video)
     console.log("detailsssss",categoryDetails);
     const updatedCategoryVideoList =  categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)
     const updatCategory= {...categoryDetails,allVideos:updatedCategoryVideoList}
     console.log("updatedCategory",updatCategory);

     
     //updating the category from deleteing the category
 
     const result = await updateCategoryAPI(updatCategory)
     // use stateLifting to communicate data from view to category
      setdeleteResponseFromView(result)
     // use api to upload video
     // call get allvideos
     //noted
     await saveVideoAPI(video)
     getAllVIdeos()

      
     
        
     }


    return (
        <>
            <Row droppable ="true" onDragOver={dragOVerView} onDrop={e=>categoryVideoDragOverView(e)} >
              {
                allVideos?.length>0?
                allVideos.map( video=>(
                        <Col key={video?.id} sm={12} md={6} lg={4}>
                    <VideoCard    setdeleteVideoResponefromRemoveCard={setdeleteVideoResponefromRemoveCard}  displayData={video} />
                </Col>
                ))
                :
                <div className='fw-bolder text-danger fs-5'> No video are Uploaded</div>
              }

            </Row>

        </>
    )
}
