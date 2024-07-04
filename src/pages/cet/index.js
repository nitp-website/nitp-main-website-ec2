import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "./cet.css" ;

const title = "Department of Chemical Engineering and Technology";

const Cet = () => {
  return (
    <>
      <Layout>
        <SEO title="CET" />
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

export default Cet;
