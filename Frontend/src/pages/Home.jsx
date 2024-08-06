import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { BsTable, BsGridFill, BsPlusSquare } from "react-icons/bs";
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:justify-start content-center">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="BookHub"
                  src="./src/assets/icon.svg"
                  className="h-8 w-auto"
                />
              </div>
              <div className="text-gray-400 hover:text-white pl-4 text-2xl font-bold">BookHub</div>
            </div>
            <div className="absolute inset-y-0 right-0 flex space-x-4 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setShowType('table')}
              >
                <BsTable aria-hidden="true" className="h-6 w-6" />
              </button>

              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setShowType('card')}
              >
                <BsGridFill aria-hidden="true" className="h-6 w-6" />
              </button>
              <Link  to='/books/create'>
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => Link}
              >
                <BsPlusSquare aria-hidden="true" className="h-6 w-6" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </Disclosure>
      <div className='p-4 bg-sky-200'>
        <h1 className='text-4xl my-8 font-mono font-bold text-center'>Books List</h1>
        {loading ? (
          <Spinner />
        ) : showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
