import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogMain from "@/components/containers/blog/BlogMain";

const BlogPage = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner
        title=" The Digital Growth Hub—But Make It Fun"
        navigation="Blog Standard"
        bannerContent="Step into our world of digital marketing tips, pro advice, and more insider secrets than your favorite gossip mag. Get the scoop on how to boost your biz like a pro."
      />
      <BlogMain />
    </Layout>
  );
};

export default BlogPage;
