import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

const TagsSlider = ({ tags, onClick }) => {
  const swiperOption = {
    spaceBetween: 10,
    slidesPerView: "auto",
    navigation: true,
    freeMode: {
      enabled: true,
    },
  };

  const handleTagClick = (tag) => {
    if (onClick) {
      onClick(tag)
    }
  }

  return (
    <Swiper {...swiperOption} modules={[Navigation, FreeMode]}>
      {tags.map((tag, index) => (
        <SwiperSlide key={index}>
          <button className="tag-slide" onClick={()=> handleTagClick(tag)}>{tag}</button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TagsSlider;