import React from 'react'

const TaskList = () => {
  return (
    <div id='taskscroll' className='h-[48%] overflow-x-auto flex items-center gap-5 justify-start flex-nowrap w-full py-5  mt-8'>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'></div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'></div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'></div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'></div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'></div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'></div>
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'></div>
    </div>
  )
}

export default TaskList
