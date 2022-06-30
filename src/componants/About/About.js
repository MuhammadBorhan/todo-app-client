import React, { useEffect, useState } from 'react';

const About = () => {
    const [tasks, setTasks] = useState([]);
    const [relode, setRelode] = useState(false);

    useEffect(() => {
        const url = `https://fierce-cove-70446.herokuapp.com/users`;
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
            const url = `https://fierce-cove-70446.herokuapp.com/users/${id}`;
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

    return (
        <div className='px-12'>
            <div className='mt-4 py-5'>
                <h3 className='text-2xl text-green-600 font-bold text-center'>Total Task: {tasks.length}</h3>
                <div>
                    {
                        tasks.map((task) => <div key={task._id} task={task} class="overflow-x-auto lg:w-3/4 mx-auto">
                            <table className="table w-full">
                                <tbody>
                                    <tr className=''>
                                        <td className='text-left ml-0 pl-0'><p className='font-bold'><span className='text-bold text-indigo-600 font-bold text-xl'>Name:</span> {task.name}</p> <p><span className='text-blue-500 font-bold text-xl'>Description:</span> {task.description}</p></td>
                                        <td onClick={() => handleDelete(task._id)} className='text-right text-2xl text-red-600 font-bold cursor-pointer'><button class="btn btn-error  font-bold">Delete</button></td>
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