"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "motion/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const sliderImages = [
  { id: 1, src: "/slider1.png", alt: "Slider 1" },
  { id: 2, src: "/slider2.png", alt: "Slider 2" },
  { id: 3, src: "/slider3.png", alt: "Slider 3" },
];

export default function CarouselSection() {
  return (
    <section className="w-full py-12 overflow-hidden bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={false}
          grabCursor={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 15,
            },
          }}
          className="pb-12 px-6 md:px-[calc((100vw-1280px)/2)]!"
          style={{ overflow: "visible" }}
        >
          {sliderImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={image.id === 1}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #0071f5 !important;
          width: 24px !important;
          border-radius: 5px !important;
        }
        .swiper {
          padding-bottom: 60px !important;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
}
