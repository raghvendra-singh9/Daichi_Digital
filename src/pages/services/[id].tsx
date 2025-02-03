import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '@/components/layout/Layout';
import ServiceDetailsMain from '@/components/containers/service-details/ServiceDetailsMain';
import ServiceDetailsBanner from '@/components/layout/banner/ServiceDetailsBanner';
import CtaTwo from '@/components/containers/service-details/CtaTwo';
import serviceData from '@/components/containers/service-details/data/serviceData.json'; // Import service data

interface ServiceData {
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
  service: ServiceData | null;
}

const ServiceDetails = ({ service }: ServiceDetailsProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <Layout header={2} footer={2} video={false}>
      {/* Pass service data to the banner */}
      <ServiceDetailsBanner title={service.title} />

      {/* Pass service data to the details component */}
      <ServiceDetailsMain data={service} />

      {/* CTA section */}
      <CtaTwo />
    </Layout>
  );
};

// **Generate Static Paths** (for pre-rendering service pages)
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = serviceData.map((service) => ({
    params: { id: service.id },
  }));

  return { paths, fallback: false };
};

// **Fetch Service Data Based on ID**
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const service = serviceData.find((s) => s.id === id) || null;

  return {
    props: {
      service,
    },
  };
};

export default ServiceDetails;
