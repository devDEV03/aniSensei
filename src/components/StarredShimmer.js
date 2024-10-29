import React from 'react'

const StarredShimmer = () => {
  return (
    <div className='fixed w-full h-full bg-blue-400'>
       <div className='px-8 py-2 absolute bg-gradient-to-b from-black w-screen z-10 flex justify-between flex-col md:flex-row'>
    <div className='w-12 h-12 my-4 cursor-pointer mx-auto md:mx-0 py-2 md:py-0 bg-black'>
    </div>

    <div className='p-2 mx-2 flex justify-between'>
        <div className='w-12 h-12 bg-blue-600 text-white px-4  mx-4 rounded-lg font-bold hover:animate-pulse '>
        </div>

        <div className='w-12 h-12 mx-2 bg-gray-300 rounded-full'>
        </div>

        <div className='w-12 h-12 mx-2 bg-gray-300'>

        </div>

    </div>
</div>


    <div className=" w-2/3 h-1/4 bg-opacity-50 bg-gray-200 py-[30%] md:p-[2%] mt-[45%] md:my-[20%] mx-[10%] md:mx-[15%] flex justify-center flex-col absolute bg-opacity-70 ">
    </div>
    </div>
  )
}

export default StarredShimmer
