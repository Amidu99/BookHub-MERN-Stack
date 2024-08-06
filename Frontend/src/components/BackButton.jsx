import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-400 text-white px-1 py-1 rounded-full w-fit hover:bg-sky-500 hover:shadow-lg transition duration-300 ease-in-out'
      >
        <BsArrowLeftCircle className='text-3xl' />
      </Link>
    </div>
  );
};

export default BackButton;
