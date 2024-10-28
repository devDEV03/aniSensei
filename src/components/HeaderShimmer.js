import React from 'react'

const HeaderShimmer = () => {
  return (
    <div className='px-8 py-2 absolute bg-gradient-to-b from-black w-screen z-10 flex justify-between flex-col md:flex-row'>
    <div className='w-12 cursor-pointer mx-auto md:mx-0 py-2 md:py-0 bg-gray-300'>
    </div>

    <div className='p-2 mx-2 flex justify-between'>
        <div className='bg-blue-600 text-white px-4  mx-4 rounded-lg font-bold hover:animate-pulse '>
        </div>

        <div className='w-12 h-12 mx-2 bg-gray-300'>
        </div>

        <div className='w-12 h-12 mx-2 bg-gray-300'>

        </div>

    </div>
</div>
  )
}

export default HeaderShimmer
