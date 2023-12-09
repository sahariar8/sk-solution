import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import face1 from "../../assets/face4.jfif"
import face2 from "../../assets/face2.jfif"
import face3 from "../../assets/face5.jfif"
import face4 from "../../assets/face3.jfif"
import face5 from "../../assets/face6.jfif"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 
import '../../css/style.css'
const Staff = () => {
    return (
      <div className=" mt-10">
        <h1 className="text-2xl md:text-6xl text-emerald-400 font-bold text-center">
          Our Staff
        </h1>
        <p className="text-center text-sm font-semibold text-slate-600 pt-3 pb-10">
          Meet Our Best Team
        </p>
        <div className='max-w-screen-xl mx-auto py-8'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='flex flex-col'>
               <div className='md:h-[200px] md:w-[200px] h-[100px] w-[100px] mx-auto'>
                   <img src={face1} alt="" className="rounded-full" />
               </div>
               
               <div>
                  <h1 className='text-center pt-3 pb-8 font-bold text-xl text-slate-600'>Adrina Rosa</h1>
                </div>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col'>
               <div className='md:h-[200px] md:w-[200px] h-[100px] w-[100px] mx-auto'>
                   <img src={face2} alt="" className="rounded-full" />
               </div>
               <h1 className='text-center pt-3 pb-8 font-bold text-xl text-slate-600'>Sahariar Alam</h1>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col'>
               <div className='md:h-[200px] md:w-[200px] h-[100px] w-[100px]  mx-auto'>
                   <img src={face3} alt="" className="rounded-full" />
               </div>
               <h1 className='text-center pt-3 pb-8 font-bold text-xl text-slate-600'>Sharmin Nahar</h1>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col'>
               <div className='md:h-[200px] md:w-[200px] h-[100px] w-[100px] mx-auto'>
                   <img src={face4} alt="" className="rounded-full" />
               </div>
               <h1 className='text-center pt-3 pb-8 font-bold text-xl text-slate-600'>Aftab Iqbal</h1>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col'>
               <div className='md:h-[200px] md:w-[200px] h-[100px] w-[100px] mx-auto'>
                   <img src={face5} alt="" className="rounded-full" />
               </div>
               <h1 className='text-center pt-3 pb-8 font-bold text-xl text-slate-600'>Shakira Sana</h1>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
};

export default Staff;