import React from 'react';



const Cards = (props) => {
  return (
    
    <div>
        <br />
        <div className='flex card relative left-12 cursor-pointer'>
        <img class="w-10 h-10  rounded-full mx-2 border-4 border-pink-600 relative top-4" src={props.prof} alt="" width="384" height="512"/>
        <div className='flex-col'>
        <h1 className='relative top-4 font-medium'>{props.name}</h1>
        <p className='relative top-2 font-thin'>{props.place}</p>
        <div className='flex justify-end relative left-96'>
        <p className='bg-red relative bottom-10 right-96 text-gray-400 text-4xl cursor-pointer'>...</p>
        </div>
        <div>
            <h6 className='relative bottom-5 font-serif'>{props.title}</h6>
            <img className='h-96 relative bottom-4 rounded' src={props.img} />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Cards