import React from 'react'

const CreateTask = () => {
  return (
<div className="bg-[#1c1c1c] text-white p-6 rounded-md w-[calc(100%-2.5rem)] h-[calc(100%-2.5rem)] m-5">
  <form className="flex flex-col gap-6 h-full">
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label
          htmlFor="task-title"
          className="block text-sm font-medium text-gray-300"
        >
          Task Title
        </label>
        <input
          type="text"
          id="task-title"
          name="task-title"
          placeholder="Make a UI design"
          className="mt-1 block w-full bg-transparent border border-gray-700 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-500 px-3 py-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="date" className="block text-sm font-medium text-gray-300">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="mt-1 block w-full bg-transparent border border-gray-700 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-white px-3 py-2"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="assign-to"
          className="block text-sm font-medium text-gray-300"
        >
          Assign to
        </label>
        <input
          type="text"
          id="assign-to"
          name="assign-to"
          placeholder="Employee name"
          className="mt-1 block w-full bg-transparent border border-gray-700 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-500 px-3 py-2"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-300"
        >
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="design, dev, etc"
          className="mt-1 block w-full bg-transparent border border-gray-700 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-500 px-3 py-2"
        />
      </div>
    </div>

    <div className="flex gap-6 h-full">
      <div className="flex flex-col flex-1">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-300"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="5"
          placeholder="Task details"
          className="mt-1 block w-full bg-transparent border border-gray-700 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-500 px-3 py-2 h-full"
        ></textarea>
      </div>

      <div className="flex flex-col justify-end w-48">
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Create Task
        </button>
      </div>
    </div>
  </form>
</div>


  )
}

export default CreateTask