// import React from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.css";

// const ServiceMain = () => {
//   return (
//     <section className="section service-t">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="service-t__slider-w">
//               <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 slidesPerGroup={1}
//                 speed={800}
//                 loop={true}
//                 centeredSlides={false}
//                 modules={[Autoplay, Navigation]}
//                 autoplay={{
//                   delay: 5000,
//                   disableOnInteraction: false,
//                   pauseOnMouseEnter: true,
//                 }}
//                 navigation={{
//                   nextEl: ".next-service-t",
//                   prevEl: ".prev-service-t",
//                 }}
//                 className="service-t__slider"
//                 breakpoints={{
//                   1400: {
//                     slidesPerView: 4,
//                   },
//                   1200: {
//                     slidesPerView: 3,
//                   },
//                   768: {
//                     slidesPerView: 2,
//                   },
//                 }}
//               >
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           01
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">
//                             Social Media Management
//                           </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>Content creation</li>
//                         <li>Strategy development</li>
//                         <li>Account management</li>
//                         <li>Analytics & reporting</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           02
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">
//                             Digital Advertising (PPC)
//                           </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>Google Ads & Social Media Ads</li>
//                         <li>MEDIA Planning</li>
//                         <li>Campaign strategy & planning</li>
//                         <li>A/B testing & optimization</li>
//                         <li>Analytics & performance tracking</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           03
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">
//                             Website Design and Development
//                           </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>Custom website design</li>
//                         <li>E-commerce development</li>
//                         <li>Responsive & mobile-first design</li>
//                         <li>SEO-friendly development</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           04
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">
//                             Search Engine Optimization (SEO)
//                           </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>On-page & technical SEO</li>
//                         <li>Off-page SEO & backlinks</li>
//                         <li>Local SEO</li>
//                         <li>Content optimization</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           05
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">
//                             Content Creation and Marketing
//                           </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>Blog & article creation</li>
//                         <li>Video production</li>
//                         <li> Graphic design </li>
//                         <li>Copywriting & email content</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           06
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">
//                             Branding and Graphic Design
//                           </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>Logo & brand identity</li>
//                         <li>Packaging design</li>
//                         <li>Marketing collateral </li>
//                         <li>Social media visuals</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           07
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">
//                             E-commerce Solutions
//                           </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>E-commerce site development</li>
//                         <li>Product Mockups</li>
//                         <li>Payment integration</li>
//                         <li>E-commerce SEO</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                   <div className="service-t-single-wrapper">
//                     <div className="service-t__slider-single">
//                       <div className="intro">
//                         <span className="sub-title">
//                           08
//                           <i className="fa-solid fa-arrow-right"></i>
//                         </span>
//                         <h4>
//                           <Link href="service-single">
//                             Google My Business (GMB) Management
//                           </Link>
//                         </h4>
//                       </div>
//                       <ul>
//                         <li>GMB setup & optimization</li>
//                         <li>Post management & updates</li>
//                         <li>Review management</li>
//                         <li>Local SEO & analytics</li>
//                       </ul>
//                       <div className="cta">
//                         <Link href="service-single">
//                           <i className="icon-arrow-top-right"></i>
//                           <span>service details</span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="slide-group">
//         <button aria-label="previous item" className="slide-btn prev-service-t">
//           <i className="fa-light fa-angle-left"></i>
//         </button>
//         <button aria-label="next item" className="slide-btn next-service-t">
//           <i className="fa-light fa-angle-right"></i>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ServiceMain;

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const services = [
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    features: [
      'Content creation',
      'Strategy development',
      'Account management',
      'Analytics & reporting',
    ],
  },
  {
    id: 'digital-advertising',
    title: 'Digital Advertising (PPC)',
    features: [
      'Google Ads & Social Media Ads',
      'MEDIA Planning',
      'Campaign strategy & planning',
      'A/B testing & optimization',
      'Analytics & performance tracking',
    ],
  },
  {
    id: 'website-design',
    title: 'Website Design and Development',
    features: [
      'Custom website design',
      'E-commerce development',
      'Responsive design',
      'SEO-friendly development',
    ],
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    features: [
      'On-page & technical SEO',
      'Off-page SEO',
      'Local SEO',
      'Content optimization',
    ],
  },
  {
    id: 'content-marketing',
    title: 'Content Creation and Marketing',
    features: [
      'Blog & article creation',
      'Video production',
      'Graphic design',
      'Copywriting & email content',
    ],
  },
];

const ServiceMain = () => {
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: '.next-service-t',
                  prevEl: '.prev-service-t',
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: { slidesPerView: 4 },
                  1200: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                }}
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id}>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            01 <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href={`/services/${service.id}`}>
                              {service.title}
                            </Link>
                          </h4>
                        </div>
                        <ul>
                          {service.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <div className="cta">
                          <Link href={`/services/${service.id}`}>
                            <i className="icon-arrow-top-right"></i>
                            <span>Service Details</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ServiceMain;
