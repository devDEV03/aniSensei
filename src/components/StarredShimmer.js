import React from 'react'
import HeaderShimmer from './HeaderShimmer'

const StarredShimmer = () => {
  return (
    <div className='fixed w-full h-full bg-blue-100'>
       <HeaderShimmer />
    <div className=" w-2/3 bg-gray-300 py-[30%] md:p-[2%] mt-[45%] md:my-[20%] mx-[10%] md:mx-[15%] flex justify-center flex-col absolute bg-opacity-70 ">
    </div>
    </div>
  )
}

export default StarredShimmer
