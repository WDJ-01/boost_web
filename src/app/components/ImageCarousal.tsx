'use client';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 3000 }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide>
        <img src="https://img.freepik.com/free-photo/bodybuilding-concept-with-strong-man-holding-barbell_23-2147675189.jpg?t=st=1728415264~exp=1728418864~hmac=2c8c2f716e187a7005889d1c34a70c3ec01f922b632e29c6e2efdd099d38f974&w=740" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://img.freepik.com/free-photo/close-up-man-doing-crossfit-workout_23-2149080431.jpg?ga=GA1.2.1604041211.1725906706&semt=ais_hybrid" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.freepik.com/free-photo/strong-man-doing-bodybuilding_1265858.htm#fromView=search&page=1&position=9&uuid=72c5f47a-cf6c-42b9-a65a-52b2df46427b" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;



