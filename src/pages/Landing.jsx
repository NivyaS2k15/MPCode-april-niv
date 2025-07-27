import React from 'react'
import { Link } from 'react-router-dom'
import landingimg from '../assets/sound2.gif'
import { Button, Card } from 'react-bootstrap'
import middle2 from '../assets/middle2.jpg'
 import  middle1 from '../assets/middle1.gif'
 import middle3 from '../assets/middle3.jpg'


const Landing = () => {
    return (
        <div style={{ paddingTop: '100px' }} className='container'>
            {/* landing part */}
            <div className='row align-item-center'>
                <div className="col-lg-5">
                    <h3 >Welcome to <span className='text-info'> Media PLayer</span> </h3>
                    <p style={{ textAlign: 'justify' }}>Media Player  !Effortless. Elegant. Yours. This is your personal gateway to streaming, organizing, and enjoying videos like never before. Whether you're revisiting favorite moments or diving into fresh content, our player ensures smooth playback, quick access, and a distraction-free experience. Upload, explore, and let your screen come alive.Want a lighter version? Or something more technical? I can tailor the message to match the exact tone you're going for!
                    </p>
                    <Link to={'/home'} className='btn btn-info'>Get Started</Link>
                </div>
                <div className="col"></div>
                {/* landing image */}
                <div className="col-lg-6">
                    <img src={landingimg} className='img-fluid' alt="" />
                </div>

            </div>

            {/* feaure part */}
            <div>
                <h3 className='text-center my-5'> Features</h3>
                <div className='row mt-5'>
                    <div className="col-lg-4">

                        <Card style={{ width: '20rem',backgroundColor:"#181a18" }}>
                            <Card.Img variant="top" style={{ height: '300px' }} src={middle2} className='image-fluid' />
                            <Card.Body>
                                <Card.Title>Managing Videos</Card.Title>
                                <Card.Text>
                                    users can upload ,view and remove the videos
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-lg-4">

                        <Card style={{ width: '20rem' ,backgroundColor:"#181a18"}}>
                            <Card.Img variant="top" style={{ height: '300px' }} src={middle1} className='image-fluid' />
                            <Card.Body>
                                <Card.Title>Managing Videos</Card.Title>
                                <Card.Text>
                                    users can manage  the watch history of all videos
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-lg-4">

                        <Card style={{ width: '20rem' ,backgroundColor:"#181a18"}} >
                            <Card.Img variant="top" style={{ height: '295px' }} src={middle3}  />
                            <Card.Body>
                                <Card.Title>Categories Videos</Card.Title>
                                <Card.Text>
                                    users can categories videos by drag and drop
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </div>

                </div>
            </div>

            {/* last */}

            <div className='my-5 row align-items-center border rounded p-5'>
                <div className="col-lg-5">
                    <h4 className='text-warning'> Simple ,Fast and Powerful</h4>
                    <p style={{textAlign:'justify'}}> <span style={{fontSize:'20px'}} className=' fw-bolder'>Play Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae quos maxime ex officia vitae qui impedit ea voluptas tempora, hic itaque id dolorem excepturi iste incidunt, rem eligendi ut.</p>
                    <p style={{textAlign:'justify'}}> <span style={{fontSize:'20px'}}  className='fw-bolder'>Categories Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae quos maxime ex officia vitae qui impedit ea voluptas tempora, hic itaque id dolorem excepturi iste incidunt, rem eligendi ut.</p>
                    <p style={{textAlign:'justify'}}> <span  style={{fontSize:'20px'}}className=' fw-bolder'>Managing Everything :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae quos maxime ex officia vitae qui impedit ea voluptas tempora, hic itaque id dolorem excepturi iste incidunt, rem eligendi ut.</p>
                </div>
                <div className="col"></div>
                <div className="col-lg-6">
                  <iframe style={{width:"400px" ,height:"400px"}} src="https://www.youtube.com/embed/YShVEXb7-ic" title="Tron: Ares | Official Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

            </div>
        </div>
    )
}

export default Landing