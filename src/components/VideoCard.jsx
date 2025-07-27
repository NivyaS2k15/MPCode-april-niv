import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { removeUloadAPI, saveHistoryAPI } from '../services/allAPI';
import { Await } from 'react-router-dom';

export const VideoCard = ({ displayData ,setdeleteVideoResponefromRemoveCard,insideCategory}) => {
    const [show, setShow] = useState(false);

    //delete video upload
    const deleteVide = async (id)=>{
        try {
    const result =  await removeUloadAPI(id)
     setdeleteVideoResponefromRemoveCard(result)

        } catch (error) {
            console.log(error);
            
        }
    }

    const handleClose = () => setShow(false);

    // THIS FOR GET VIDEO API
    const handleShow = async () => {
        //    this is for modal
        setShow(true);
        //THIS IS F0R API

        const{caption,youtubeLink}=displayData
        const sysdatetime = new Date()
        console.log(sysdatetime);
        console.log(sysdatetime.toLocaleString('en-US',{timeZoneName:'short'}));
        const timeStamp = sysdatetime.toLocaleString('en-US',{timeZoneName:'short'})
        const historyDetails = {caption,youtubeLink,timeStamp}
        try {
               await  saveHistoryAPI(historyDetails)
        
        } catch (error) {
            console.log(error);
            
        }
        
        



    }


    //drage function
    const videoCardDragStarted =(e,dragVideoDetails)=>{
     console.log("insdie videoCardDRagStareted with videoid..."+ dragVideoDetails.id);
     // passing the video data using event start 
      e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
    }

    return (
        <>

            <Card draggable={true} onDragStart={e =>videoCardDragStarted(e,displayData)} style={{ width: '10em', margin: "10px" }} >
                <Card.Img onClick={handleShow} height={'150px'} variant="top" src={displayData.imgUrl} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <span>{displayData.caption}</span>
                       {
                       (! insideCategory) &&  <button  onClick={()=>deleteVide(displayData?.id)} className='btn'>
                            <i className="fa-solid fa-trash text-danger"></i>
                        </button>
                       }
                    </div>
                </Card.Body>
            </Card>


            {/* modal */}



            <Modal size='md' centered show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Caption</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="300px" src={`${displayData?.youtubeLink}?autoplay=1`} title="Tron: Ares | Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Modal.Body>

            </Modal>




        </>
    )
}
