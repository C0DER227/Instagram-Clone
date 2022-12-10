import React from 'react';
import mzk from '../images/mark.jpg';
import vk from '../images/vkholi.jpg';
import musk from '../images/musk.jpg';
import pc from '../images/PC.jpg';
import bg from '../images/billgates.webp';
import ad from '../images/adani.jpeg';
import bz from '../images/bezoz.jpg';
import cz from '../images/cz.jpg';
import sn from '../images/SN.jpg';
import {BiRightArrow} from 'react-icons/bi';
import p1 from '../images/post1.jpg';
import p2 from '../images/vkholi.jpg';
import p3 from '../images/post2.jpg';
import p4 from '../images/p4.jpg';
import p5 from '../images/p5.jpg';
import Cards from './Cards';

const Main = () => {
  return (
    <div>
        <div className='flex gap-2 card rounded-t-xl cursor-pointer relative left-12 top-4' >
        <img className="w-16 h-16  rounded-full mx-auto border-2 border-pink-500 " src={mzk} alt="" width="384" height="512"/>
        <img className="w-16 h-16  rounded-full mx-auto border-2 border-pink-500" src={musk} alt="" width="384" height="512"/>
        <img className="w-16 h-16  rounded-full mx-auto border-2 border-pink-500" src={vk} alt="" width="384" height="512"/>
        <img className="w-16 h-16  rounded-full mx-auto border-2 border-pink-500" src={pc} alt="" width="384" height="512"/>
        <img className="w-16 h-16  rounded-full mx-auto border-2 border-pink-500" src={bg} alt="" width="384" height="512"/>
        <img className="w-16 h-16  rounded-full mx-auto border-2 border-pink-500" src={ad} alt="" width="384" height="512"/>
        <img className="w-16 h-16  rounded-full mx-auto border-2 border-pink-500" src={bz} alt="" width="384" height="512"/>
        <img className="w-16 h-16  rounded-full mx-auto border-2 border-pink-500" src={cz} alt="" width="384" height="512"/>{BiRightArrow}
        </div>
        <hr />
        <div classNameName='relative right-80'>
        <Cards name='Elon musk' place='Texas,United states' prof={musk} img={p1} title='Launching to mars....'/>
        <Cards name='Virat Kholi' place='Delhi,India' prof={vk} img={p2} title='Chilling near Seashore'/>
        <Cards name='Jeff Bezoz' place='New york,United states' prof={bz} img={p3} title='Family time'/>
        <Cards name='Bill Gates' place='California,United states' prof={bg} img={p4} title='Gandpa loading...'/>
        <Cards name='Priyanka Chopra' place='Chapra,India' prof={pc} img={p5} title='Happy Diwali to all...'/>
        <Cards name='Satyam Nadela' place='Dharganga,India' prof={sn} img={sn} title='Profile picture updated'/>
        <Cards name='Elon musk' place='Texas,United states' prof={musk} img={p3} title='Launching to mars....'/>
        <Cards name='Virat Kholi' place='Delhi,India' prof={vk} img={p2} title='Chilling near Seashore'/>
        <Cards name='Jeff Bezoz' place='New york,United states' prof={bz} img={p1} title='Family time'/>
        <Cards name='Bill Gates' place='California,United states' prof={bg} img={p4} title='Gandpa loading...'/>
        <Cards name='Priyanka Chopra' place='Chapra,India' prof={pc} img={p5} title='Happy Diwali to all...'/>
        <Cards name='Satyam Nadela' place='Dharganga,India' prof={sn} img={p1} title='Profile picture updated'/>
        <Cards name='Elon musk' place='Texas,United states' prof={musk} img={sn} title='Launching to mars....'/>
        <Cards name='Virat Kholi' place='Delhi,India' prof={vk} img={p2} title='Chilling near Seashore'/>
        <Cards name='Jeff Bezoz' place='New york,United states' prof={bz} img={p5} title='Family time'/>
        <Cards name='Bill Gates' place='California,United states' prof={bg} img={p4} title='Gandpa loading...'/>
        <Cards name='Priyanka Chopra' place='Chapra,India' prof={pc} img={p2} title='Happy Diwali to all...'/>
        <Cards name='Satyam Nadela' place='Dharganga,India' prof={sn} img={p1} title='Profile picture updated'/>
        </div>
    </div>
  )
}

export default Main


