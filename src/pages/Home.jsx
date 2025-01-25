import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CarouselPizza from '../components/CarouselPizza'
import Category from '../components/Category'
import CardProduct from '../components/CardProduct'
import { product } from '../database/db'


const Home = () => {
  return (
    <div>
     <Navbar/>

<section>
  <div className='w-full  flex_box flex-col gap-6 pt-40 mb-38'>
<img className='w-[150px] h-[150px] rounded-full' src="https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg" alt="" />
  <h1 className='akshar font-bold text-[60px]'>Pizza Ceneter</h1>
  
  </div>
</section>

<CarouselPizza/>
<section className='flex_box mt-16 mb-16 p-2'>
<Category/>
</section>

<section className='flex flex-col gap-9 w-full'>
{
  product.map(item=>(

    <CardProduct key={item.id} title={item.title} price={item.price} img={item.img} text={item.text} like={item.like} comment={item.comment}/>
  ))
}

</section>


    </div>
  )
}

export default Home
