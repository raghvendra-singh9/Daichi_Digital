import React from 'react';
import Layout from '@/components/layout/Layout';
import CmnBanner from '@/components/layout/banner/CmnBanner';

const termsConditionsPage = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner
        title="Terms of Service"
        navigation="terms-and-conditons"
        bannerContent="Welcome to Daiichi Digital. By accessing or using our website and services, you agree to comply with these Terms of Service. Please read them carefully before using our services."
      />
    </Layout>
  );
};

export default termsConditionsPage;
