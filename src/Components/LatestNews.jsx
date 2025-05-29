import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-1 bg-base-300 p-2'>
            <p className='text-white bg-[#D72050] py-2 px-3 font-medium'>latest</p>

            <Marquee className='flex gap-4'>
                <p className='font-bold'> Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellendus, architecto ?</p>
                <p className='font-bold'> Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellendus, architecto ?</p>
                <p className='font-bold'> Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellendus, architecto ?</p>
            </Marquee>
        </div >
    );
};

export default LatestNews;