import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-gray-500 rounded-xl px-4 py-2 m-4 relative hover:shadow-xl'>
      <h2 className='absolute top-1 right-1 px-3 py-1 bg-sky-400 rounded-lg'>
        {book.publishYear}
      </h2>
      <h4 className='my-2 text-gray-500 font-mono font-bold'>{book._id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-sky-700 text-2xl' />
        <h2 className='my-1 font-sans font-semibold'>{book.title}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-sky-700 text-2xl' />
        <h2 className='my-1 font-sans font-semibold'>{book.author}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-2 p-4'>
        <BiShow
          className='text-3xl text-blue-600 hover:text-blue-800 cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-600 hover:text-green-700' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-yellow-600' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-500 hover:text-red-600' />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
