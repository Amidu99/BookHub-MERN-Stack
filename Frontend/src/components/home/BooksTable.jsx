import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-solid'>
      <thead>
        <tr className='text-sky-900 font-sans font-bold'>
          <th className='border border-sky-600'>No</th>
          <th className='border border-sky-600'>Title</th>
          <th className='border border-sky-600 max-md:hidden'>
            Author
          </th>
          <th className='border border-sky-600 max-md:hidden'>
            Publish Year
          </th>
          <th className='border border-sky-600'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8 text-sky-800 font-sans font-semibold'>
            <td className='border border-sky-600 text-center'>
              {index + 1}
            </td>
            <td className='border border-sky-500 text-center'>
              {book.title}
            </td>
            <td className='border border-sky-500 text-center max-md:hidden'>
              {book.author}
            </td>
            <td className='border border-sky-500 text-center max-md:hidden'>
              {book.publishYear}
            </td>
            <td className='border border-sky-500 text-center'>
              <div className='flex justify-center gap-x-4'>
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
