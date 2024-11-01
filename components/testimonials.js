import React from "react";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import http from "../helpers/http";
import Text from "../components/text";

import { cmsFileUrl } from "../helpers/helpers";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export const getServerSideProps = async (context) => {
  const result = await http
    .get("home")
    .then((response) => response.data)
    .catch((error) => ({ error: error.message })); // Return a JSON-serializable object

  return { props: { result } };
};

export default function Testimonials({testimonials, content}) {
  console.log(testimonials)

  const testiSlider = {
    autoplay: true,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      '<img src="/images/arrow-left.svg" />',
      '<img src="/images/arrow-right.svg" />',
    ],
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      580: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1600: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section id="testimonial">
        <div className="contain">
          <div className="content_center">
            <Text string={content.description7}/>
          </div>
        
      <OwlCarousel {...testiSlider}>
        {testimonials?.map((testimonial,index) => (
        <div className="item">
        <div className="inner">
          <div className="star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <p>
           <Text string={testimonial.description} />
          </p>
          <div className="profile">
            <div className="image">
              <img src={cmsFileUrl(testimonial.testi_image)} alt=""/>
            </div>
            <div className="text">
              <h5>{testimonial.title}</h5>
              <h6>{testimonial.designation}</h6>
            </div>
          </div>
        </div>
      </div>

        ))}
        
        
    
      </OwlCarousel>

      </div>
        </section>
    </>
  );
}
