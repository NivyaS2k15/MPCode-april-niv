import { useEffect, useState } from 'react';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import {
  deleteCategoryAPI,
  getAllCategoryAPI,
  removeUloadAPI,
  saveCategoryAPI,
  updateCategoryAPI
} from '../services/allAPI';
import { VideoCard } from './VideoCard';

export const Categories = ({ setdeleteResponseFromCategory,deleteResponseView }) => {
  const [allCategories, setallCategories] = useState([]);
  const [categoryName, setcategoryName] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategory();
  }, [deleteResponseView]);

  const videoCardDropeverCategory = async (e, categoryDetails) => {
    e.preventDefault();

    const videoDetails = JSON.parse(e.dataTransfer.getData('videoDetails'));

    if (!categoryDetails.allVideos) {
      categoryDetails.allVideos = [];
    }

    categoryDetails.allVideos.push(videoDetails);
    console.log('Updated category:', categoryDetails);

    await updateCategoryAPI(categoryDetails);
    getAllCategory();

    const result = await removeUloadAPI(videoDetails.id);
    setdeleteResponseFromCategory(result);
  };

  const getAllCategory = async () => {
    try {
      const result = await getAllCategoryAPI();
      if (result.status >= 200 && result.status < 300) {
        setallCategories(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeCatgory = async (id) => {
    try {
      await deleteCategoryAPI(id);
      getAllCategory();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveCategory = async () => {
    if (categoryName) {
      const categorydetails = { categoryName, allVideos: [] };
      try {
        await saveCategoryAPI(categorydetails);
        alert('Category created');
        getAllCategory();
        handleClose();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please provide a category name');
    }
  };

  const dragoverCategory = (e) => {
    e.preventDefault();
  };

  const categoryVideoDragStarted = (e, dragvideoDetails, categoryDetails) => {
    console.log('Inside category video drag started');
    const dragData = { video: dragvideoDetails, categoryDetails };
    e.dataTransfer.setData('dragData', JSON.stringify(dragData));
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <h5>All Categories</h5>
        <button onClick={handleShow} className='btn btn-warning rounded-circle fw-bolder fs-5 ms-3'>
          +
        </button>
      </div>

      <div className='container-fluid m-3'>
        {allCategories?.length > 0 ? (
          allCategories.map((categorydetails) => (
            <div
              droppable='true'
              onDragOver={dragoverCategory}
              onDrop={(e) => videoCardDropeverCategory(e, categorydetails)}
              key={categorydetails?.id}
              className='border rounded p-3 mb-3'
            >
              <div className='d-flex justify-content-between'>
                <h5>{categorydetails?.categoryName}</h5>
                <button onClick={() => removeCatgory(categorydetails?.id)} className='btn'>
                  <i className='fa-solid fa-trash text-danger'></i>
                </button>
              </div>
              <div className='row mt-2' style={{ width: '100%' }}>
                {categorydetails?.allVideos?.length > 0 &&
                  categorydetails.allVideos.map((video, index) => (
                    <div
                      draggable={true}
                      onDragStart={(e) => categoryVideoDragStarted(e, video, categorydetails)}
                      key={`${categorydetails?.id}-${video?.id}-${index}`} // ✅ Fixed key
                      className='col-lg-4'
                      style={{ marginLeft: '5px' }}
                    >
                      <VideoCard insideCategory={true} displayData={video} />
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className='fw-bolder text-danger fs-5'>No categories are added</div>
        )}
      </div>

      <Modal centered show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId='floatingCategoryName' label='Category Name'>
            <Form.Control
              onChange={(e) => setcategoryName(e.target.value)}
              type='text'
              placeholder='Category Name'
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant='primary'>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};