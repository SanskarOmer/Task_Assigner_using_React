import React from 'react';

const TaskList = ({data}) => {
  return (
    <div
      id="taskscroll"
      className="h-[48%] overflow-x-auto flex items-center gap-5 justify-start flex-nowrap w-full py-5 mt-8"
    >
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1  rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make Notes Of DAA </h2>
        <p className='text-sm'> I will surely do that as it is very necessary for me to gain good marks.</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1  rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make Notes Of DAA </h2>
        <p className='text-sm'> I will surely do that as it is very necessary for me to gain good marks.</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1  rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make Notes Of DAA </h2>
        <p className='text-sm'> I will surely do that as it is very necessary for me to gain good marks.</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1  rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make Notes Of DAA </h2>
        <p className='text-sm'> I will surely do that as it is very necessary for me to gain good marks.</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1  rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make Notes Of DAA </h2>
        <p className='text-sm'> I will surely do that as it is very necessary for me to gain good marks.</p>
      </div>

      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1  rounded'>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make Notes Of DAA </h2>
        <p className='text-sm'> I will surely do that as it is very necessary for me to gain good marks.</p>
      </div>




    </div>
  );
};

export default TaskList;
