import React from 'react'

const Marquee = ({imageurls}) => {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
        {imageurls.map(url => <img src={url} className='w-[6vw] flex-shrink-0' />)}
        {imageurls.map(url => <img src={url} className='w-[6vw] flex-shrink-0' />)}
    </div>
  )
}

export default Marquee