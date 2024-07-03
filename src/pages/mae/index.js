import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "./mae.css" ;

const title = "Department of Mechatronics & Automation Engineering";

const Mae = () => {
  return (
    <>
      <Layout>
        <SEO title="MAE" />
        <div className="container">
          <h1 className="title">
            {title}
          </h1>
          <div className="center-screen">
            <p>Data to be updated soon</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Mae;
