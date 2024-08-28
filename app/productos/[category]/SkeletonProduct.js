import React from 'react';

const SkeletonProduct = () => {
  return (
    <div className='p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <div className='border rounded-lg shadow-lg p-4 animate-pulse'>
        <div className='bg-gray-300 h-48 w-full mb-4'></div>
        <div className='bg-gray-300 h-6 w-3/4 mb-2'></div>
        <div className='bg-gray-300 h-4 w-1/2 mb-4'></div>
        <div className='flex justify-between items-center'>
          <div className='bg-gray-300 h-6 w-1/4'></div>
          <div className='bg-gray-300 h-6 w-1/4'></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonProduct;

