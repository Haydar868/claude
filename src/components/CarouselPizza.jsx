import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay } from 'swiper/modules';

const CarouselPizza = () => {
  return (
    <div>
     <div className='carouse_lLine'> </div>
     
<div className='flex_box'>

<Swiper
  slidesPerView={2}
  loop={true}
  spaceBetween={10}

  autoplay={{
    delay: 2000, 
    disableOnInteraction: false, 
  }}
  modules={[ Autoplay]} 
  className="flex_box"
>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/5da5/1768/795792fb257dfe8911c411bb35cac6ae?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lMiQIPLdrPIzRlag5MMqMNeKOK2P05ByBsqhduXVsBiVVF9vbBtRxA6Bdt1S29XcNiCUDFTg12A7LRZYuE~tpB6rQ8cQVCaXkmfd3NNSH~g6PYP9ub3r0wTZGQ5O3mhGhwJ4Gn34BJGkxeuDwsjVqx0GjJbfsmpgs6HV38QUbD5x-~HsPQZHOFZRl13RHLWoV9lyR5wPKUoWK~yJ8qPMVITLG~NwoyUAJ83Y9fNxb4bUo86lrdcvOfBBWhrZKYnOrKZ6vCoSRVxWGeDeJpGOxja6cyOkPmN8kaUhw1LLA7T3ARC~3fjQAwdRTg72l705oN-CTN~cEU0WIToasgG0jw__" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/7fff/44d7/18aefd1f3daedf1323f27c5dc32c529d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jX3GpdwNKAK~r50f0w5fmb7zYaKE0Qb8NJxVCfwrViUuhQZMu0Gd0VkNcdR-UfK1o8RGBl4LVy7wQrR8kETZ7i2c8Lsw8QLEQ0yTgilC5M4NG2yYlshX6c9G2BB6F~qp26J6clY3-VYMHgU6SZ73bxL8dRXVpQLEKIZ9EmzxKBl4vBQQSVgegNExpUbxWVadHp~~35oyaH0GTQO9JedMEjQlzgjxmmWBQf5Nt9vYJx4-Whd5DbDC7L~YvY~lcxnZoZclfYE4WrLSyVL-jplQHo~Qmd5AEesMHIlYzIXffhlw3cXJ18QWbD1ncu3tJP0REd4DZyHTQnarMo3EraPfXg__" alt="PIZAA" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/5da5/1768/795792fb257dfe8911c411bb35cac6ae?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lMiQIPLdrPIzRlag5MMqMNeKOK2P05ByBsqhduXVsBiVVF9vbBtRxA6Bdt1S29XcNiCUDFTg12A7LRZYuE~tpB6rQ8cQVCaXkmfd3NNSH~g6PYP9ub3r0wTZGQ5O3mhGhwJ4Gn34BJGkxeuDwsjVqx0GjJbfsmpgs6HV38QUbD5x-~HsPQZHOFZRl13RHLWoV9lyR5wPKUoWK~yJ8qPMVITLG~NwoyUAJ83Y9fNxb4bUo86lrdcvOfBBWhrZKYnOrKZ6vCoSRVxWGeDeJpGOxja6cyOkPmN8kaUhw1LLA7T3ARC~3fjQAwdRTg72l705oN-CTN~cEU0WIToasgG0jw__" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-alpha-sig.figma.com/img/7fff/44d7/18aefd1f3daedf1323f27c5dc32c529d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jX3GpdwNKAK~r50f0w5fmb7zYaKE0Qb8NJxVCfwrViUuhQZMu0Gd0VkNcdR-UfK1o8RGBl4LVy7wQrR8kETZ7i2c8Lsw8QLEQ0yTgilC5M4NG2yYlshX6c9G2BB6F~qp26J6clY3-VYMHgU6SZ73bxL8dRXVpQLEKIZ9EmzxKBl4vBQQSVgegNExpUbxWVadHp~~35oyaH0GTQO9JedMEjQlzgjxmmWBQf5Nt9vYJx4-Whd5DbDC7L~YvY~lcxnZoZclfYE4WrLSyVL-jplQHo~Qmd5AEesMHIlYzIXffhlw3cXJ18QWbD1ncu3tJP0REd4DZyHTQnarMo3EraPfXg__" alt="PIZAA" />
        </SwiperSlide>
      </Swiper>
        </div>


     <div className='carouse_lLine'> </div>
    </div>
  )
}

export default CarouselPizza
