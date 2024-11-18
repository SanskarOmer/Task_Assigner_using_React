import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  
   
  return (
    <div className='p-5 bg-[#1c1c1c] h-screen '>
     
      < Header data= {data} />
      <TaskListNumber data= {data} />
      <TaskList  data= {data} />
    </div>
  )
}

export default EmployeeDashboard