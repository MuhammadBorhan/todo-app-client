import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import './SingleTask.css';

const SingleTask = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});
    useEffect(() => {
        const url = `https://fierce-cove-70446.herokuapp.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        const url = `https://fierce-cove-70446.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
                toast.success('Task Edit Successfully')
            })
    }
    return (
        <div className='flex flex-col justify-center items-center py-6 verticalHight'>
            <p className='font-bold'><span className='text-bold text-indigo-600 font-bold text-xl'>Name:</span> {task.name}</p>
            <p><span className='text-blue-500 font-bold text-xl'>Description:</span> {task.description}</p>
            <div className='md:w-1/4 w-full mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-2 border-4 mt-4'>
                    <input type="text" placeholder="Name" className="input input-bordered mb-3 w-full max-w-xs" {...register("name", { required: true })} /> <br />
                    <textarea placeholder="Description" className="input input-bordered mb-3 w-full max-w-xs" {...register("description", { required: true })} /> <br />
                    <input className='py-2 px-6 text-white font-bold rounded cursor-pointer block mx-auto bg-slate-500' type="submit" value="Edit Task" />

                </form>
            </div>
            <Link to='/'><button className="btn btn-gost mt-4">Back</button></Link>
        </div>
    );
};

export default SingleTask;