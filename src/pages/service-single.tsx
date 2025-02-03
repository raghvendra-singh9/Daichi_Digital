import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
// import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import ServiceData from '@/components/containers/service-details/data/serviceData.json';

// Define the TypeScript type for a single service
interface Service {
  id: string;
  title: string;
  description: string[];
  approachTitle: string;
  approachContent: string[];
  images: {
    thumbOne: string;
    thumbTwo: string;
  };
}

interface ServiceDetailsProps {
  service: Service | null;
}
const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  if (!service) {
    return <p>Service not found.</p>;
  }
  return (
    <Layout header={2} footer={2} video={false}>
      {/* Pass the dynamic title to the banner */}
      <ServiceDetailsBanner title={service.title} />

      {/* Pass the service details */}
      <ServiceDetailsMain data={service} />

      {/* <UxProcess /> */}
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
