import React from 'react'

const NewUser = (props) => {
    return (
        <div>
            <div className='flex justify-start mx-2 gap-2 space-y-5 relative top-24 right-80'>
                <img class="w-10 h-10  rounded-full mx-auto" src={props.Img} alt="" width="384" height="512" />
                <div className='flex-col gap-2'>
                    <p className='relative bottom-6'>{props.nameL}</p>
                    <p className='relative bottom-6'>{props.usrd}</p>
                </div>
                <div className='relative left-20'>
                    <a className='text-blue-500 flex  gap-8' href="#">Follow</a>
                </div>
            </div>
        </div>
    )
}

export default NewUser