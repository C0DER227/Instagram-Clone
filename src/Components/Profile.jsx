import React from 'react'
import profile from '../images/prof.jpg';
import aw from '../images/aw.jpg';
import rn from '../images/ronaldo.jpg';
import mi from '../images/messi.jpg';
import skd from '../images/skd.webp';
import NewUser from './NewUser';
import  Navbar  from './Navbar';


export const Profile = () => {
    return (
        <div>
            <div className='flex justify-start mx-2 gap-2 space-y-5 relative top-20 left-24'>
                <img class="w-16 h-16  rounded-full mx-auto" src={profile} alt="" width="384" height="512" />
                <div className='flex-col gap-2'>
                    <p className='relative bottom-2'>Mukesh Kr</p>
                    <p className='relative bottom-2'>@mmk1994</p>
                </div>
                <div className='relative left-16'>
                    <a className='text-blue-500 ' href="#">Switch</a>
                </div>
                <div className='relative top-12 right-52 flex'>
                    <p className='relative left-2 text-gray-400'>Suggestions<span className='relative left-2'>For <span className='relative bottom-6 left-28'>You</span></span></p>
                    <p className='relative left-28'>See <span className='relative bottom-6 left-8'>All</span></p>
                </div>
               <div>
                <NewUser nameL='Walker' usrd='@AllenW' Img={aw}/>
                <NewUser nameL='Shikar' usrd='@imSk' Img={skd}/>
                <NewUser nameL='Renaldo' usrd='@Ronaldo' Img={rn}/>
                <NewUser nameL='Messi' usrd='@Messi' Img={mi}/>
               </div>
            </div>
            <div>
                <Navbar/>
            </div>
        </div>
    )
}
