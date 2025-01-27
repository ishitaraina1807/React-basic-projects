import React, { useState } from 'react';

const AddTask = ({ isOpened, handleCloseTask, setTasks }) => {
    const [taskName, setTaskName] = useState("")
    const [taskDesc, setTaskDesc] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [priority, setPriority] = useState("high")

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value)
    }
    const handleTaskDescChange = (e) => {
        setTaskDesc(e.target.value)
    }
    const handleTaskDueDateChange = (e) => {
        setDueDate(e.target.value)
    }
    const handleTaskPriorityChange = (e) => {
        setPriority(e.target.value)
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = {
            name: taskName,
            description: taskDesc,
            dueDate: dueDate,
            priority: priority
        }
        setTasks((prevTasks) => [...prevTasks, newTask])
        handleCloseTask();
    }

    return (
        isOpened && (
            <div className='bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 z-50'>
                <h1 className='text-2xl font-semibold mb-6 text-gray-800'>Add New Task</h1>
                <form onSubmit={handleAddTask} className='space-y-4'>
                    <div>
                        <label className='block text-gray-600 mb-2'>Task Name</label>
                        <input
                            type="text"
                            value={taskName}
                            onChange={handleTaskNameChange}
                            placeholder='Write your task name'
                            className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-600 mb-2'>Task Description</label>
                        <input
                            type="text"
                            value={taskDesc}
                            onChange={handleTaskDescChange}
                            placeholder='Write your task description'
                            className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-600 mb-2'>Due Date</label>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={handleTaskDueDateChange}
                            className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-600 mb-2'>Priority</label>
                        <select
                            name="priority"
                            id="priority"
                            value={priority}
                            onChange={handleTaskPriorityChange}
                            className='w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handleCloseTask}
                            className='mt-6 py-2 px-6 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'
                        >
                            Close
                        </button>
                        <button
                            type="submit"

                            className='mt-6 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        )
    );
};

export default AddTask;
