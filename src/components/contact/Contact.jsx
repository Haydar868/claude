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
    <div className='absolute top-16 left-[5px] flex_box z-30'>

      <div onClick={()=>accardion()} className={` gap-3 overflow-hidden ${horizantalAccardion ? 'w-[268px]' : 'w-[45px]'}  h-[45px] rounded-full p-2 bg-black flex_between accardion_trans cursor-pointer`}>
<div className='w-[30px] h-[30px] shrink-0 bg-white rounded-full flex_box'>
<img src={c} alt="" />
</div>

<p className='text-white shrink-0'>administratsiya call</p>


<div className='flex_box gap-3'>
<img src={call} alt="icon" />
<img src={sms} alt="icon" />
</div>

      </div>



    </div>
  )
}

export default Contact
