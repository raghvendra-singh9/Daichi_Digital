import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
// import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
// import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";

const AboutUs = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="About Us"
        navigation="About Us"
        bannerContent="  At Daiichi Digital, we’re here to shake up the world of
                  tailored, premium digital marketing solutions. With a perfect
                  blend of innovation, affordability, and exclusive focus, we’re
                  all about helping businesses thrive in today’s digital age."
      />
      <HomeTwoModal />
      <Agency />
      {/* <TeamMembers /> */}
      <HomeTestimonial />
      {/* <AboutSponsor /> */}
      <AboutCta />
    </Layout>
  );
};

export default AboutUs;
