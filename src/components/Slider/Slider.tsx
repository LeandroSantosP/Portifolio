import { Swiper, SwiperSlide } from "swiper/react";
import { OnlyInfosNecessery } from "../../../pages";
import * as C from './SliderStyles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";

interface Slider {
   Slider: OnlyInfosNecessery
}
export const Slider = ({ Slider }: Slider) => {

   let settings = {
      spaceBetween: 30,
      loop: true,
      pagination: true,
      breakpoints: {
         1400: {
            slidesPerView: 5
         },
         1200: {
            slidesPerView: 4
         },
         900: {
            slidesPerView: 3,
         },
         600: {
            slidesPerView: 2,
         },
         400: {
            slidesPerView: 1,
         },
      }
   }

   return (
      <C.SliderStyles>
         <Swiper
            style={{ width: "100%" }}
            {...settings}
            modules={[Navigation, Pagination]}
         >
            {Slider.map(project => {
               const formatData = new Date(project.data).toLocaleDateString('pt-br', {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
               });

               return (
                  <SwiperSlide key={project.id} style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                     <img style={{ maxWidth: "400px" }} src={project.urlImage} alt="banner" />
                     <p>{formatData}</p>
                  </SwiperSlide>
               )
            })}
         </Swiper>
      </C.SliderStyles>
   )
}