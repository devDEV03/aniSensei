import React from 'react'
import HeaderShimmer from './HeaderShimmer'

const LoginShimmer = () => {
  return (
    <div className='fixed w-full h-full bg-blue-100'>
        <HeaderShimmer />
      <div className=" absolute w-3/4 md:w-1/2 max-w-md min-h-96 p-8 bg-gray-300 bg-opacity-80 my-20 mx-auto left-0 right-0 rounded-lg text-black sm:my-24 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      </div>
    </div>
  )
}

export default LoginShimmer
