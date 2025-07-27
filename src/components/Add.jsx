

import { useState } from 'react';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
 
import { saveVideoAPI } from '../services/allAPI';

export const Add = ({ setAddResponsefromHome }) => {
    const [videoDetails, setVideoDetails] = useState({ caption: "", imgUrl: "", youtubeLink: "" })
    console.log(videoDetails);



    const [invalidYoutubeLink, setinvalidYoutubeLink] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const extractEmbedYoutubeLink = (userInputLink) => {

        if (userInputLink.includes("https://www.youtube.com/watch?v=")) {
            console.log(userInputLink.split("v=")[1].slice(0, 11));
            const Videoid = userInputLink.split("v=")[1].slice(0, 11)
            setinvalidYoutubeLink(false)
            setVideoDetails({ ...videoDetails, youtubeLink: `https://www.youtube.com/embed/${Videoid}` })
            console.log('new videoobj', videoDetails);


        } else {

            setinvalidYoutubeLink(true)
            setVideoDetails({ ...videoDetails, youtubeLink: "" })
        }
    }

    const handleYoutubeVideo = async () => {
        const { caption, imgUrl, youtubeLink } = videoDetails

        if (caption && imgUrl && youtubeLink) {
            try {

                const result = await saveVideoAPI(videoDetails)
                console.log(result);
                if (result.status >= 200 && result.status < 300) {
                    alert("success")

                    handleClose()
                    setAddResponsefromHome(result)
                }

            } catch (error) {
                console.log(error);

            }


        } else {
            alert('please filll the form')
        }

    }


    return (
        <>
            <div className='d-flex align-items-center'>
                <h5>Upload Videos</h5>
                <button onClick={handleShow} className='btn btn-warning  rounded-circle fw-bolder fs-5 ms-3'>
                    +
                </button>

            </div>




            {/* modal */}

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* floating lables textbox */}
                    <div className='p-2 border rounded'>
                        {/* caption */}
                        <FloatingLabel controlId="floatingCaption" label="Video Caption">
                            <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder=" Video Caption" />
                        </FloatingLabel>

                        <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image Url">
                            <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imgUrl: e.target.value })} type="text" placeholder="Video Image Url" />
                        </FloatingLabel>

                        <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
                            <Form.Control onChange={e => extractEmbedYoutubeLink(e.target.value)} type="text " placeholder="Video Youtube Link" />
                        </FloatingLabel>

                        {
                            invalidYoutubeLink && <div className='text-danger fw-bolder'>
                                Invalid youtube Link
                            </div>

                        }

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={handleYoutubeVideo} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}



