import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const ClintRatting = () => {
  return (
    <div className="mb-28">
      <h1 className="text-6xl text-black font-family-5 text-center mt-32 mb-20">
        WHAT MY CLIENTS
        <br />
        ARE SAYING
      </h1>
      <div className="mx-32">
        <Swiper
        style={{
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          // "--swiper-pagination-bottom": "200px"
        }}
          slidesPerView={2}
          spaceBetween={60}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className=" border rounded-2xl px-10 py-8">
              <div className="flex items-center gap-5 ">
                <img
                  className="rounded-full w-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzsEVjyjSMEWFMfnDX3x8nKwlwPTjYlC6o5rMapu1mw&s"
                  alt=""
                />
                <div>
                  <h1 className="text-[16px] font-bold">Sakib Al Hasan</h1>
                  <p className="text-xs">CHO Founder UIKIT</p>
                </div>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae nihil corrupti natus similique velit minima facilis
                architecto, reiciendis, quam nostrum perspiciatis harum{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border rounded-2xl px-10 py-8">
              <div className="flex items-center gap-5 ">
                <img
                  className="rounded-full w-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzsEVjyjSMEWFMfnDX3x8nKwlwPTjYlC6o5rMapu1mw&s"
                  alt=""
                />
                <div>
                  <h1 className="text-[16px] font-bold">Sakib Al Hasan</h1>
                  <p className="text-xs">CHO Founder UIKIT</p>
                </div>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae nihil corrupti natus similique velit minima facilis
                architecto, reiciendis, quam nostrum perspiciatis harum{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border rounded-2xl px-10 py-8">
              <div className="flex items-center gap-5 ">
                <img
                  className="rounded-full w-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzsEVjyjSMEWFMfnDX3x8nKwlwPTjYlC6o5rMapu1mw&s"
                  alt=""
                />
                <div>
                  <h1 className="text-[16px] font-bold">Sakib Al Hasan</h1>
                  <p className="text-xs">CHO Founder UIKIT</p>
                </div>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae nihil corrupti natus similique velit minima facilis
                architecto, reiciendis, quam nostrum perspiciatis harum{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border rounded-2xl px-10 py-8">
              <div className="flex items-center gap-5 ">
                <img
                  className="rounded-full w-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzsEVjyjSMEWFMfnDX3x8nKwlwPTjYlC6o5rMapu1mw&s"
                  alt=""
                />
                <div>
                  <h1 className="text-[16px] font-bold">Sakib Al Hasan</h1>
                  <p className="text-xs">CHO Founder UIKIT</p>
                </div>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae nihil corrupti natus similique velit minima facilis
                architecto, reiciendis, quam nostrum perspiciatis harum{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border rounded-2xl px-10 py-8">
              <div className="flex items-center gap-5 ">
                <img
                  className="rounded-full w-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzsEVjyjSMEWFMfnDX3x8nKwlwPTjYlC6o5rMapu1mw&s"
                  alt=""
                />
                <div>
                  <h1 className="text-[16px] font-bold">Sakib Al Hasan</h1>
                  <p className="text-xs">CHO Founder UIKIT</p>
                </div>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae nihil corrupti natus similique velit minima facilis
                architecto, reiciendis, quam nostrum perspiciatis harum{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border rounded-2xl px-10 py-8">
              <div className="flex items-center gap-5 ">
                <img
                  className="rounded-full w-10"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzsEVjyjSMEWFMfnDX3x8nKwlwPTjYlC6o5rMapu1mw&s"
                  alt=""
                />
                <div>
                  <h1 className="text-[16px] font-bold">Sakib Al Hasan</h1>
                  <p className="text-xs">CHO Founder UIKIT</p>
                </div>
              </div>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae nihil corrupti natus similique velit minima facilis
                architecto, reiciendis, quam nostrum perspiciatis harum{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClintRatting;
