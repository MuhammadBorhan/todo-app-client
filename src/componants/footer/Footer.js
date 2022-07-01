import React from 'react';

const Footer = () => {
    const date = new Date();
    const currentDate = date.getFullYear();
    return (
        <div className='text-center p-4 bg-neutral text-neutral-content'>
            <p className='text-center'>Copyright &copy; {currentDate}  - All right reserved By Borhan</p>
        </div>
    );
};

export default Footer;