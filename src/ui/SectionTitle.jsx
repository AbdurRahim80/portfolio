import React from 'react';

const SectionTitle = ({title, titleNo}) => {
    return (
        <div>
            <h2 className='text-md lg:text-2xl font-semibold flex md:inline-flex items-center'>
                <span className='text-base md:text-lg flex text-designColor mr-2'>
                    {titleNo}
                </span>
                {title}
                <span className='w-20 md:w-60 lg:w-72 h-[1px] bg-gray-700 ml-6'></span>
            </h2>
        </div>
    );
};

export default SectionTitle;