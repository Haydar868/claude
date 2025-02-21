import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";

const CarouselPizza = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
       <div className="carouse_lLine"> </div>
      <Swiper
        slidesPerView={2} // 2 ta slide bir vaqtda ko‘rinadi
        loop={true} // Cheksiz aylanish
        speed={2000} // Harakat tezligi
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="relative"
      >
        {[
          "https://s3-alpha-sig.figma.com/img/5da5/1768/795792fb257dfe8911c411bb35cac6ae?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c05ESx8ZGhD4RMPk3bhb3HhUaypR0OOD~5eTAtRpdKAH29EvrdNd7Pp~OGMoB3X1~WOEyAjafiDfQObZ~O1KaHE5ix9NRlBSBheEcGjwNi~Loc383lzYXwOrAmfOEjvC1XXx-EGgNJKnBZkFyS-7IL3Qefi3LWd5uHJzteFyibHXUe2xOHaD5Ia5T0sHDEr74-D9HbUmvit98nCQIqcjbRKC5hJDzlv26PyOPe6VKLlhDnLr3SrdWBg4exNotBuVRwTXYl7OVXnvohTlRU7fIJRaRoqVt~6129WqtirT8dYFTlNER9GfLZnFHRjXSPL7ZNn2ixS7D4NahRAh86uEAw__",
          "https://s3-alpha-sig.figma.com/img/7fff/44d7/18aefd1f3daedf1323f27c5dc32c529d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HwaTJMTuLHcAs8xrs~V0ytdbEJUSJm2Mn8rkWb6Y4XYYwmxq3AOEtFkAgGZVffuDrcUhzBZ9psi-IiynGpmhVExT3HjjaoT6ythG92uAt3mKPeglkRM0oRwTDvrNDhdox9Jxynd6LzIHn4n8RKFGNPrV8miuDuy0BP3VIGopo1VYmp6a9w4dUhUjbfvGudhHA5TdvM-wR3aGkvslkbQEZt5cAYQHYgkxZ2f7HzE2X2cQDanCJfDqMkgk~f05psU0hE4LFfvW01ZWp3TEkISr2B-bd50fJ29EFmkIKQrCy3khENH2HnsU~JFEcHfZ~zjnQoGCntnZlkmVc3AG7CRKnQ__",
          "https://s3-alpha-sig.figma.com/img/5da5/1768/795792fb257dfe8911c411bb35cac6ae?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c05ESx8ZGhD4RMPk3bhb3HhUaypR0OOD~5eTAtRpdKAH29EvrdNd7Pp~OGMoB3X1~WOEyAjafiDfQObZ~O1KaHE5ix9NRlBSBheEcGjwNi~Loc383lzYXwOrAmfOEjvC1XXx-EGgNJKnBZkFyS-7IL3Qefi3LWd5uHJzteFyibHXUe2xOHaD5Ia5T0sHDEr74-D9HbUmvit98nCQIqcjbRKC5hJDzlv26PyOPe6VKLlhDnLr3SrdWBg4exNotBuVRwTXYl7OVXnvohTlRU7fIJRaRoqVt~6129WqtirT8dYFTlNER9GfLZnFHRjXSPL7ZNn2ixS7D4NahRAh86uEAw__",
          "https://s3-alpha-sig.figma.com/img/7fff/44d7/18aefd1f3daedf1323f27c5dc32c529d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HwaTJMTuLHcAs8xrs~V0ytdbEJUSJm2Mn8rkWb6Y4XYYwmxq3AOEtFkAgGZVffuDrcUhzBZ9psi-IiynGpmhVExT3HjjaoT6ythG92uAt3mKPeglkRM0oRwTDvrNDhdox9Jxynd6LzIHn4n8RKFGNPrV8miuDuy0BP3VIGopo1VYmp6a9w4dUhUjbfvGudhHA5TdvM-wR3aGkvslkbQEZt5cAYQHYgkxZ2f7HzE2X2cQDanCJfDqMkgk~f05psU0hE4LFfvW01ZWp3TEkISr2B-bd50fJ29EFmkIKQrCy3khENH2HnsU~JFEcHfZ~zjnQoGCntnZlkmVc3AG7CRKnQ__",
         
        ].map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img src={src} alt={`Pizza ${index + 1}`} className="rounded-lg " />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="carouse_lLine"> </div>
    </div>
  );
};

export default CarouselPizza;
