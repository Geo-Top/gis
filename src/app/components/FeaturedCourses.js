"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function FeaturedCourses({ courses, dir = "ltr", titleSection }) {

  return (
    <section className="py-10" dir={dir}>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12">{titleSection}</h2>

        {/* أزرار التنقل المخصصة */}
        <div
          className="custom-next flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white absolute top-1/2 right-1 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-900"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        <div
          className="custom-prev flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white absolute top-1/2 left-1 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-900"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mb-10">
                <div className="h-48 bg-blue-600 flex items-center justify-center">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={195}
                    height={195}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{course.duration}</span>
                    <a
                      href={`${course.link}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      {course.cta}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
