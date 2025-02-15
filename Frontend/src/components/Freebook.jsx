import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../assets/list.json";
import Cards from './Cards';

function Freebook() {
    
    const filterData = list.filter((data) => data.category === "Free");
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024, //it`s a pixel of devices : large device mai 3 card
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600, //medium or small devices mai 2 card
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480, //we generate a pixel for extra small device : 1 card
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
            <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi consequuntur aut, amet tempore tenetur atque eos deserunt voluptatem dolor sequi alias molestias velit inventore similique sunt!</p>
        </div>
    
        <div>
            <Slider {...settings}>
                {filterData.map((item)=>(
                    <Cards item={item} key={item.id} />
                ))}
            </Slider>
        </div>
    </div>
    </>
  );
}

export default Freebook;
