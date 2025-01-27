import React from 'react'
import claudeImage from './images/claude.svg'
import claudeText from './images/claudetext.svg'
import { FaBars } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Contact from '../contact/Contact';
import { CiFaceSmile } from "react-icons/ci";

import { FaMoneyBillWave } from "react-icons/fa";


const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  return (
    <header className='relative'>
<div className='w-full h-[50px] mb-3 flex_box bg-[#EDEDED]'>
<marquee>
    <div className='flex items-center gap-2'>

<p>
    NEW menu
<CiFaceSmile className='text-xl inline-block ml-2'/>
</p>

<p>
Restaurant system 500<span className='font-bold'>$</span>
</p>

<FaMoneyBillWave className='text-xl inline-block ml-2' />

<p>
Best product
</p>
<CiFaceSmile className='text-xl inline-block ml-2'/>

<p>
    2025
</p>

    </div>
</marquee>
</div>

        <div className='flex_between p-2 gap-3'>



     <div className='flex_box gap-2 mr-2 '>
<button onClick={toggleDrawer} className='text-black  text-3xl font-bold'>
<FaBars/>
</button>

<div className='flex_box gap-1 mr-2'>
    <div className='flex_box w-[30px] h-[30px] ml-4 shrink-0 bg-[#1F1F1F] rounded-[10px] border border-[#D5D5D5]'>
<img src={claudeImage} alt="" />
    </div>
    <img src={claudeText} alt="" />
</div>

     </div>
<div className=' flex_between w-full  h-[35px] rounded-[20px] bg-[#EDEDED]'>
<button className='font-bold text-2xl pl-2'>
<CiSearch  />
</button>
</div>
<div className='flex_box gap-1'>
<button className='font-bold text-3xl'>
<IoLanguage />
</button>

<button className='w-[72px] h-[34px] border rounded-full'>
Kirish
</button>
</div>

        </div>

        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='rounded-tr-xl rounded-br-xl'
            >
                <div className='flex_box flex-col'>

<img className='w-[100px] h-[100px] rounded-full mt-11' src="https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg" alt="logo" />


<h1 className='akshar text-[25px] font-bold mt-5'>
PIZZA CENTER
</h1>

                </div>
            </Drawer>
            <Contact/>

    </header>
  )
}

export default Navbar