import React from 'react';
import logoText from '../images/text.png';
import { HiHome } from "react-icons/hi";
import { HiSearch } from 'react-icons/hi';
import {FiCompass } from 'react-icons/fi';
import {TbBrandTelegram } from 'react-icons/tb';
import {AiOutlineHeart} from 'react-icons/ai';
import {TbSquarePlus } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';


const Slider = () => {
    return (
        <div >
            <img className='h-16 cursor-pointer' src={logoText}/><br />
            <ul className='space-x-1 space-y-10'>
                <div className='flex gap-3 cursor-pointer'>
                    <HiHome size='24' />
                    <li><a  href="#">Home</a></li></div>
                <div className='flex gap-3  cursor-pointer'>
                <HiSearch size='24' />
                    <li><a href="#">Search</a></li></div>
                <div className='flex gap-3 cursor-pointer'>
                    <FiCompass size='24'/>
                    <li><a href="#">Explorer</a></li></div>
                <div className='flex gap-3  cursor-pointer'>
                    <TbBrandTelegram size='24'/>
                    <li><a href="#">Messages</a></li></div>
                <div className='flex gap-3 cursor-pointer'>
                    <AiOutlineHeart size='24'/>
                    <li><a href="#">Notifications</a></li></div>
                <div className='flex gap-3 cursor-pointer'>
                    <TbSquarePlus size='24'/>
                    <li><a href="#">Create</a></li></div>
                <div className='flex gap-3 cursor-pointer'>
                    <CgProfile size='24'/>
                    <li><a href="#">Profile</a></li></div>
                <h1 className='flex gap-3 cursor-pointer'><FaBars size='24'/>More</h1>
            </ul>
        </div>
    )
}

export default Slider