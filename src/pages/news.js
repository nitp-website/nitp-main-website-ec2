import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Newspage from "../components/global/newspage";
import ReadNews from "../components/readnews";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const News = () => {
  const query = useQuery();
  const id = query.get("id");

  return (
    <Layout>
      <SEO title="News" />
      {id && String(id).length !== 0 ? <ReadNews id={id} /> : <Newspage />}
    </Layout>
  );
};

export default News;
