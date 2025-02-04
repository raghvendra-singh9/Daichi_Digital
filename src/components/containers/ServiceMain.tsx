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
    id: 'website-design-and-development',
    title: 'Website Design and Development',
    features: [
      'Custom website design',
      'E-commerce development',
      'Responsive & mobile-first design',
      'SEO-friendly development',
    ],
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    features: [
      'On-page & technical SEO',
      'Off-page SEO & backlinks',
      'Local SEO',
      'Content optimization',
    ],
  },
  {
    id: 'content-creation-and-marketing',
    title: 'Content Creation and Marketing',
    features: [
      'Blog & article creation',
      'Video production',
      'Graphic design',
      'Copywriting & email content',
    ],
  },
  {
    id: 'branding-and-graphic-design',
    title: 'Branding and Graphic Design',
    features: [
      'Logo & brand identity',
      'Packaging design',
      'Marketing collateral',
      'Social media visuals',
    ],
  },
  {
    id: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    features: [
      'E-commerce site development',
      'Product Mockups',
      'Payment integration',
      'E-commerce SEO',
    ],
  },
  {
    id: 'google-my-business-management',
    title: 'Google My Business (GMB) Management',
    features: [
      'GMB setup & optimization',
      'Post management & updates',
      'Review management',
      'Local SEO & analytics',
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
                {services.map((service, index) => (
                  <SwiperSlide key={service.id}>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          {/* Dynamic Subtitle Number */}
                          <span className="sub-title">
                            {String(index + 1).padStart(2, '0')}
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <h4>
                            <Link href={`/services/${service.id}`}>
                              {service.title}
                            </Link>
                          </h4>
                        </div>
                        <ul>
                          {service.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
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
