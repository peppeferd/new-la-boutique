"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import slide1 from "../public/assets/pic (1).jpeg";
import slide2 from "../public/assets/pic (4).jpeg";
import slide3 from "../public/assets/pic (6).jpeg";
import slide4 from "../public/assets/pic (8).jpeg";
import slide5 from "../public/assets/pic (9).jpeg";
import slide6 from "../public/assets/pic (10).jpeg";
import slide7 from "../public/assets/pic (11).jpeg";
import slide8 from "../public/assets/pic (12).jpeg";
import slide9 from "../public/assets/pic (14).jpeg";
import slide10 from "../public/assets/pic (15).jpeg";
import slide11 from "../public/assets/pic (16).jpeg";
import slide12 from "../public/assets/pic (17).jpeg";
import slide13 from "../public/assets/banner2.jpg";
import slide14 from "../public/assets/laboutique.png";
import slide15 from "../public/assets/sfondo55.png";
import slide16 from "../public/assets/sfondoNumber1.png";
import slide17 from "../public/assets/sfondoNumber2.png";
import slide18 from "../public/assets/banner1.jpg";
import { Suspense } from "react";
const Home = () => {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="min-h-screen mt-[110px]">
        <div>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            speed={500}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="h-full w-full"
          >
            <SwiperSlide>
              <Image
                /*    width={100}
                height={100} */
                src={slide1}
                alt="slide1"
                className="h-full w-full  "
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={slide2}
                alt="slider2"
                /*    width={100}
                height={100} */
                className="h-full w-full "
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000 }}
              speed={500}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="h-full w-full"
            >
              <SwiperSlide>
                <Image
                  /*    width={100}
                  height={100} */
                  src={slide3}
                  alt="slide1"
                  className="h-full w-full  "
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src={slide4}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slide5}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slide6}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000 }}
              speed={500}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="h-full w-full"
            >
              <SwiperSlide>
                <Image
                  /*    width={100}
                  height={100} */
                  src={slide7}
                  alt="slide1"
                  className="h-full w-full  "
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src={slide8}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slide9}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slide10}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000 }}
              speed={500}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="h-full w-full"
            >
              <SwiperSlide>
                <Image
                  /*    width={100}
                  height={100} */
                  src={slide18}
                  alt="slide1"
                  className="h-full w-full  "
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src={slide17}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000 }}
              speed={500}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="h-full w-full"
            >
              <SwiperSlide>
                <Image
                  src={slide13}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slide14}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000 }}
              speed={500}
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
              className="h-full w-full"
            >
              <SwiperSlide>
                <Image
                  /*    width={100}
                  height={100} */
                  src={slide15}
                  alt="slide1"
                  className="h-full w-full  "
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  src={slide16}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slide11}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={slide12}
                  alt="slider2"
                  /*    width={100}
                  height={100} */
                  className="h-full w-full "
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
