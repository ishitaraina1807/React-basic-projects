import React, { useEffect } from 'react'
import { useState } from 'react'

const layout = () => {

    const [text, setText] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(10);


    const handleTextChange = (event) => {
        setText(event.target.value);
    }
  
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeRemaining((time) =>{
                if(time === 0) {
                    clearInterval(timer);
                    return 0;
                }
                return time - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeRemaining]);

    const minutes = Math.floor(timeRemaining % 3600 / 60);
    const seconds = timeRemaining % 60;


    const getWordCount = () => {
        const words = text.trim().split(/\s+/).filter(Boolean);
        return words.length;
    }

    return (
        <div className='h-screen p-20'>
            <h1 className='text-blue-600 text-4xl text-center'> Typing Speed Checker</h1>
            <div className='text-red-500 font-semibold'>Time Remaining: {`${minutes}m ${seconds}s`}</div>
            <textarea
                className='border-2 border-gray-300 p-2 mt-4 w-full h-[30vh]'
                placeholder='Start typing here...'
                value={text}
                onChange={handleTextChange}
            />
            <p className='text-green-500 font-semibold'>Word Count: {getWordCount()}</p>
        </div>
    )
}

export default layout
