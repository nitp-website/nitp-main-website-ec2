import React from "react";
import { useLocation } from "react-router-dom";
import Innovationpage from "../components/global/Innovationpage";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReadInn from "../components/readinn";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Innovation = () => {
  const query = useQuery();
  const id = query.get("id");

  return (
    <Layout>
      <SEO title="Innovation" />
      <div className="InnovationPage">
        {id && String(id).length !== 0 ? <ReadInn id={id} /> : <Innovationpage />}
      </div>
    </Layout>
  );
};

export default Innovation;
