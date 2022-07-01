import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import './Home.css';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        const url = `https://fierce-cove-70446.herokuapp.com/user`;
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
                toast.success('Task Successfully Added');
            })
    }
    return (
        <div className='px-12 verticalHight'>
            <div className='md:w-1/4 w-full mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-2 border-4 mt-4'>
                    <input type="text" placeholder="Name" className="input input-bordered mb-3 w-full max-w-xs" {...register("name", { required: true })} /> <br />
                    <textarea placeholder="Description" className="input input-bordered mb-3 w-full max-w-xs" {...register("description", { required: true })} /> <br />
                    <input className='py-2 px-6 text-white font-bold rounded cursor-pointer block mx-auto bg-slate-500' type="submit" value="Add Task" />

                </form>
            </div>
        </div>
    );
};

export default Home;