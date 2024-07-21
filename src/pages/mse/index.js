import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "./mae.css" ;

const title = "Department of Materials Science & Engineering ";

const Mse = () => {
  return (
    <>
      <Layout>
        <SEO title="MSE" />
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

export default Mse;
