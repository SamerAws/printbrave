"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type MediaItem = {
  id: number;
  url: string;
  type: string;
};

export default function ProductSlider({
  image,
  video,
  media,
}: {
  image?: string | null;
  video?: string | null;
  media?: MediaItem[];
}) {
  return (
    <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  grabCursor={true}
>
      {image && (
        <SwiperSlide>
          <img
            src={image}
            alt=""
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
      )}

      {video && (
        <SwiperSlide>
          <video
            controls
            className="w-full h-96 object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        </SwiperSlide>
      )}

      {media?.map((item) => (
        <SwiperSlide key={item.id}>
          {item.type === "video" ? (
            <video
              controls
              className="w-full h-96 object-cover"
            >
              <source src={item.url} type="video/mp4" />
            </video>
          ) : (
            <img
              src={item.url}
              alt=""
              className="w-full h-96 object-cover"
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}