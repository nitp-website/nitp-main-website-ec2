import React from "react";
import SEO from "../components/seo";
import Facultyprofile from "../components/global/facultyprofile";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Csefacultyprofilepage = () => {
  const query = useQuery();
  const id = query.get("id");

  console.log(id);

  if (id && id.endsWith("nitp.ac.in")) {
    return (
      <>
        <SEO title="Faculty Profile" />
        <Facultyprofile url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`} />
      </>
    );
  } else {
    return null;
  }
};

export default Csefacultyprofilepage;
