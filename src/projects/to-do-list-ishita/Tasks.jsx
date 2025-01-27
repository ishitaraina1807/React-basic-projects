import React, { useState } from 'react';
import userData from './userData';
import AddTask from './AddTask';

const Tasks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tasks, setTasks] = useState(userData);

    const handleOpenAddTask = () => {
        setIsOpen(true);
    };

    const handleCloseTask = () => {
        setIsOpen(false);
    };

    return (
        <div className='relative p-8 flex flex-col items-center'>
            {isOpen && <AddTask isOpened={isOpen} handleCloseTask={handleCloseTask} setTasks={setTasks} />}
            <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-30' : 'opacity-100'} w-full`}>
                <h1 className='text-2xl font-semibold mb-6 text-gray-800'>Task List:</h1>
                {tasks.map((task, index) => (
                    <div key={index} className='flex flex-col justify-between items-center p-4 mb-4 w-full bg-white shadow-md rounded-md'>
                        <h2 className='text-lg font-medium text-gray-700'>{task.name}</h2>
                        <p>{task.description}</p>
                        <div className="flex gap-6">
                            <p>{task.dueDate}</p>
                            <p>{task.priority}</p>
                        </div>
                    </div>
                ))}
                <button
                    onClick={handleOpenAddTask}
                    className='mt-6 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default Tasks;
