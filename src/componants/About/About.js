import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const About = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        const url = `http://localhost:5000/user`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
            })
    }
    return (
        <div className='w-1/4 mx-auto mt-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-2 border-4'>
                <input type="text" placeholder="Name" className="input input-bordered mb-3 w-full max-w-xs" {...register("name", { required: true })} /> <br />
                <textarea placeholder="Description" className="input input-bordered mb-3 w-full max-w-xs" {...register("description", { required: true })} /> <br />
                <input className='py-2 px-6 text-white font-bold rounded cursor-pointer block mx-auto bg-slate-500' type="submit" value="Task Add" />

            </form>
            <div className='mt-4'>
                <h3 className='text-2xl text-indigo-600 font-bold text-center'>Task: {tasks.length}</h3>
            </div>
        </div>
    );
};

export default About;