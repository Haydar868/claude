import React, { useState } from 'react'
import c from './C.svg'
import call from './call.png'
import sms from './sms.png'
const Contact = () => {

let [horizantalAccardion,setHorizantalAccardion] = useState(false)

let accardion = ()=>{
horizantalAccardion ?
setHorizantalAccardion(false) :
setHorizantalAccardion(true)
}

  return (
    <div className='absolute top-16 left-[5px] flex_box'>
      <button onClick={()=>accardion()} className='w-[45px] h-[45px] rounded-full p-2 bg-black flex_box cursor-pointer'>
<div className='w-full h-full bg-white rounded-full flex_box'>
<img src={c} alt="" />
</div>
      </button>

<div className={` ${horizantalAccardion ? 'w-[268px] opacity-[1] gap-2' : 'w-0 opacity-0 gap-4'} overflow-x-hidden  flex_between p-2 accardion_trans h-[49px] bg-black rounded-full ml-3`}>

<button  className='w-[30px] shrink-0 h-[30px] rounded-full  bg-black flex_box cursor-pointer'>
<div className='w-full h-full bg-white rounded-full flex_box'>
<img src={c} alt="" />
</div>
      </button>

<p className='text-white  shrink-0'>
administratsiya call
</p>
<div className='flex_box gap-2 cursor-pointer'>

<img src={call} alt="" />
<img src={sms} alt="" />

</div>

</div>

    </div>
  )
}

export default Contact
