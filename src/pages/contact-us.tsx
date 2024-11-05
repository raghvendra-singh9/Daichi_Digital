import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";

const ContactUs = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="Contact Us"
        navigation="Contact Us"
        bannerContent=" We’re here to help with all your digital marketing needs. Got questions? Want to know how Daiichi Digital can help you grow and thrive? Just reach out—we’re pretty quick on the reply.
"
      />
      <ContactMain />
    </Layout>
  );
};

export default ContactUs;
