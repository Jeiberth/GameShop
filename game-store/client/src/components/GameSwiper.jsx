import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './gameSwiper.css';
// import required modules
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);
  const handleToggleVideo = () => {
    setActive(!active);
  };

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 35,
          stretch: 200,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="gameSwiper"
      >
        {games.map(game => (
          <SwiperSlide key={game.id}>
            <div className="gameSlider">
              <img src={game.background_image} />
              <div className="content">
                <h2>{game.name}</h2>
                <p>{game.description}</p>
                <div className="buttons">
                  <a className="orderBtn" href="#">
                    Order Now
                  </a>
              
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default GameSwiper;
