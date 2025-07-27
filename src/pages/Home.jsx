import React, { useState } from 'react'
import { Add } from '../components/Add'
import { Link } from 'react-router-dom'
import { View } from '../components/View'
import { Categories } from '../components/Categories'


const Home = () => {
 const [addResponsefromHome,setAddResponsefromHome]= useState("")   // this is for state uplifting
 const [deleteResponseFromCategory,setdeleteResponseFromCategory] = useState("")

 const [deleteResponseView,setdeleteResponseFromView] = useState("")


  return (

    <div style={{padding:'100px'}}>
       <div className='d-flex justify-content-between container my-5'> 
      <Add setAddResponsefromHome={setAddResponsefromHome}  />
      <Link to={'/history'}>Watch Histroy</Link>
       </div>
       <div className='contianer fluid row my-5'>
        <div className="col-lg-6">
            <h4>All videos</h4>
            <View  setdeleteResponseFromView={setdeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory}  addResponsefromHome={addResponsefromHome}/>

        </div>
        <div className="col-lg-6">
            <Categories  deleteResponseView={deleteResponseView}  setdeleteResponseFromCategory={setdeleteResponseFromCategory}/>

        </div>



       </div>

    </div>
  )
}

export default Home