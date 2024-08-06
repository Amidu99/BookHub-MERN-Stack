import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className="relative flex items-center mb-10">
        <BackButton />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-mono font-bold text-sky-500">Books Info</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center">
          <div className='flex flex-col border-4 border-sky-400 rounded-xl w-fit p-4'>
            <div className='my-3'>
              <span className='text-xl mr-4 text-sky-500 font-sans font-semibold'>ID</span>
              <span className='text-base font-medium text-cyan-700'>{book._id}</span>
            </div>
            <div className='my-3'>
              <span className='text-xl mr-4 text-sky-500 font-sans font-semibold'>Title</span>
              <span className='text-base font-medium text-cyan-700'>{book.title}</span>
            </div>
            <div className='my-3'>
              <span className='text-xl mr-4 text-sky-500 font-sans font-semibold'>Author</span>
              <span className='text-base font-medium text-cyan-700'>{book.author}</span>
            </div>
            <div className='my-3'>
              <span className='text-xl mr-4 text-sky-500 font-sans font-semibold'>Publish Year</span>
              <span className='text-base font-medium text-cyan-700'>{book.publishYear}</span>
            </div>
            <div className='my-3'>
              <span className='text-xl mr-4 text-sky-500 font-sans font-semibold'>Create Time</span>
              <span className='text-base font-medium text-cyan-700'>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className='my-3'>
              <span className='text-xl mr-4 text-sky-500 font-sans font-semibold'>Last Update Time</span>
              <span className='text-base font-medium text-cyan-700'>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
