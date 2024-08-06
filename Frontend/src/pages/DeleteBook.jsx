import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <div className="relative flex items-center mb-10">
        <BackButton />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-mono font-bold text-sky-500">Delete Book</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-4 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl text-red-500 font-sans font-semibold'>Are You Sure You want to delete this book?</h3>
        <button
          className='p-3 bg-red-600 text-white m-8 w-9/12 rounded-xl'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook;
