import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FaqMain from "@/components/containers/FaqMain";

const FaqPage = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="Got Questions? We’ve Got Answers!"
        navigation="Faq"
        bannerContent="We know navigating digital marketing can feel overwhelming, but we're here to make it easy. Below, you'll find answers to the most common questions we get about our services, pricing, process, and more. If you don’t see what you’re looking for, feel free to reach out—our team is always happy to help!"
      />
      <FaqMain />
    </Layout>
  );
};

export default FaqPage;
