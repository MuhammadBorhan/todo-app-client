import React from 'react';
import { useForm } from "react-hook-form";

const About = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-1/4 mx-auto mt-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-2 border-4'>
                <input type="text" placeholder="Name" className="input input-bordered mb-3 w-full max-w-xs" {...register("name", { required: true })} /> <br />
                <textarea placeholder="Description" className="input input-bordered mb-3 w-full max-w-xs" {...register("description", { required: true })} /> <br />
                <input className='py-2 px-6 text-white font-bold rounded cursor-pointer block mx-auto bg-slate-500' type="submit" value="Add" />

            </form>
        </div>
    );
};

export default About;