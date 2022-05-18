import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const About = () => {
    const [tasks, setTasks] = useState([]);
    const [relode, setRelode] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setRelode(!relode);
            })
    }, [relode]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = tasks.filter(task => task._id !== id);
                    setTasks(rest);
                })
        }
    }

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
        <div className='px-12'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-2 border-4 w-1/4 mx-auto mt-4'>
                <input type="text" placeholder="Name" className="input input-bordered mb-3 w-full max-w-xs" {...register("name", { required: true })} /> <br />
                <textarea placeholder="Description" className="input input-bordered mb-3 w-full max-w-xs" {...register("description", { required: true })} /> <br />
                <input className='py-2 px-6 text-white font-bold rounded cursor-pointer block mx-auto bg-slate-500' type="submit" value="Add Task" />

            </form>
            <div className='mt-4 py-5'>
                <h3 className='text-2xl text-indigo-600 font-bold text-center'>Total Task: {tasks.length}</h3>
                <div>
                    {
                        tasks.map((task) => <div key={task._id} task={task} class="overflow-x-auto lg:w-3/4 mx-auto">
                            <table className="table w-full">
                                <tbody>
                                    <tr className=''>
                                        <td className='text-left ml-0 pl-0'><p>Name: {task.name}</p> <p>Description: {task.description}</p></td>
                                        <td onClick={() => handleDelete(task._id)} className='text-right text-2xl text-red-600 font-bold cursor-pointer'>X</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;