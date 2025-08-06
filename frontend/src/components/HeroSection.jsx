import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,          // transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // change slide every 4 seconds
    fade: true,          // fade transition
    pauseOnHover: true,
  };

  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaW5nfGVufDB8fDB8fHww',
      title: "Welcome to My Website",
      subtitle: ""
    },
    {
      src: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&auto=format&fit=crop&q=60',
      title: "IT's 1 vs 3",
      subtitle: ""
    }
  ];

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[80vh] object-cover"
            />
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-10 text-white max-w-md">
              <h2 className="text-4xl font-bold mb-2 drop-shadow-lg">{slide.title}</h2>
              <p className="text-lg mb-4 drop-shadow">{slide.subtitle}</p>
              <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                Explore 
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;
