import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleTask = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [id]);
    return (
        <div className='flex flex-col justify-center items-center py-6'>
            <p className='font-bold'><span className='text-bold text-indigo-600 font-bold text-xl'>Name:</span> {task.name}</p>
            <p><span className='text-blue-500 font-bold text-xl'>Description:</span> {task.description}</p>
        </div>
    );
};

export default SingleTask;