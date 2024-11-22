import React from 'react'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'
import Header from '../Others/Header'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard