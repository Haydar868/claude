import React from 'react'
import { catalog } from '../database/db'
const Category = () => {
  return (
    
    <div className='grid grid-cols-5  gap-6'>
      
{
    catalog.map((db,index)=>(
<div key={index} className='w-[63px] cursor-pointer p-2 h-[56px] rounded-lg flex_box border border-black '>
<img src={db.img} alt={db.title} />
</div>
    ))
}


    </div>
  )
}

export default Category
