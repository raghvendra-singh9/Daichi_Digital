import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/ServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
// import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
// import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurServices = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner
        title="What We Offer "
        navigation="Our Services"
        bannerContent="Need better search rankings, high-performing ads, or engaging social media campaigns? We crafts customized digital marketing solutions that target your goals and fuel measurable growth"
      />
      <ServiceMain />
      <HomeTwoModal />
      {/* <UxProcessTwo /> */}
      {/* <HomeTestimonialThree /> */}
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
