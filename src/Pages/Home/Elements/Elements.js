import React, { useState } from 'react';

const Elements = () => {

    return (
        <div className='p-20 grid grid-cols-1 md:grid-cols-4 gap-5'>
            <div className='w-52 flex-col text-xl uppercase h-52 bg-primary text-white flex justify-center items-center'>
                <h2>primary color</h2>
                <h4>#FF7B54</h4>
            </div>
            <div className='w-52 flex-col text-xl uppercase h-52 bg-secondary text-white flex justify-center items-center'>
                <h2>secondary color</h2>
                <h4>#FFB26B</h4>
            </div>
            <div className='w-52 flex-col text-xl uppercase h-52 bg-accent text-white flex justify-center items-center'>
                <h2>accent color</h2>
                <h4>#FFD56F</h4>
            </div>
            <div className='w-52 flex-col text-xl uppercase h-52 bg-info text-white flex justify-center items-center'>
                <h2>info color</h2>
                <h4>#939B62</h4>
            </div>
        </div>
    );
};

export default Elements;