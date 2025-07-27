import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAllVideoAPI, getAllHistoryAPI } from '../services/allAPI'


const Histroy = () => {

    const [allVideohistory, setallVideohistory] = useState([])

    useEffect(() => {
        getALLHistory()
    }, [])

    // DELETE HISTORY
    const removeHistory = async (id) => {
        try {

            await deleteHistoryAPI(id)
            getALLHistory()

        } catch (error) {
            console.log("delete is not working", error);

        }
    }

    const getALLHistory = async () => {

        try {

            const result = await getAllHistoryAPI()
            console.log("history is coming", result);



            if (result.status >= 200 && result.status < 300) {
                console.log("history if  array", result.data);
                setallVideohistory(result.data)

            } else {
                console.log("history is not working");

            }



        } catch (error) {
            console.log(error);


        }
    }


    return (
        <div style={{ padding: '100px' }}>
            <div className='d-flex justify-content-between container my-5'>
                <h1> Watch History</h1>
                <Link to={'/home'}>Back to  Home</Link>
            </div>

            <table className='contianer my-5 table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Caption</th>
                        <th>Link</th>
                        <th>TimeStamp</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allVideohistory?.length > 0 ?
                            allVideohistory?.map((videoDetails, index) => (
                                <tr key={videoDetails?.id}>
                                    <td>{index + 1}</td>
                                    <td>{videoDetails.caption}</td>
                                    <td>{videoDetails.youtubeLink}</td>
                                    <td>{videoDetails.timeStamp}</td>
                                    <td><button onClick={() => removeHistory(videoDetails.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
                                </tr>
                            )) :
                            <div className='fw-bolder'> classsdddd</div>


                    }

                </tbody>


            </table>


        </div>

    )
}

export default Histroy
