import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import axios from "axios";
import { Link } from 'react-router-dom';

function Courses() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/books");
        setBooks(res.data);
        setLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false); // Set loading to false on error
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div className='mt-28 item-center justify-center text-center'>
            <h1 className='text-3xl font-semibold md:text-4xl'>
              We're delighted to have you{" "}
              <span className='text-pink-500'>Here! :)</span>
            </h1>
            <p className='mt-12'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
              assumenda? Repellendus, iste corrupti? Tempore laudantium
              repellendus accusantium sed architecto odio, nisi expedita
              quas quidem nesciunt debitis dolore non aspernatur praesentium
              assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
              enim eos aut. Nobis quisquam reiciendis sunt sed magnam consequatur!
            </p>
            <Link to="/">
              <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 font-bold'>
                Back
              </button>
            </Link>
          </div>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
            {loading ? (
              <p>Loading...</p> // Show a loading indicator while fetching data
            ) : (
              books.map((item) => (
                <Cards key={item.id} item={item} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
