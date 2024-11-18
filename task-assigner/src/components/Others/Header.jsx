import React from 'react';

const Header = ({data}) => {
  return (
    <div className='flex items-center justify-between p-6 rounded-lg'>
      <h1 className='text-white text-2xl font-semibold'>
        Hello <br />
        <span className='text-4xl  text-blue-300 font-extrabold'> {data.firstName} 🙌</span>
      </h1>
      <button className='bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300'>
        Log Out
      </button>
    </div>
  );
};

export default Header;
