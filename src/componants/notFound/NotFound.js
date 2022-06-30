import React from 'react';

const NotFound = () => {
    return (
        <div className='flex flex-col mt-20 items-center h-100vh'>
            <h1 className='text-2xl text-red-500'>Error...</h1>
            <h1 className='text-red-600 font-bold text-5xl'>404</h1>
            <p className='text-red-400 text-3xl'>Page Not Found</p>
        </div>
    );
};

export default NotFound;