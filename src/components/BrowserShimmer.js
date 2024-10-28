import React from 'react'
import HeaderShimmer from './HeaderShimmer'

const BrowserShimmer = () => {
  return (
    <div className='fixed w-full h-full bg-black'>
        <HeaderShimmer />
    </div>
  )
}

export default BrowserShimmer