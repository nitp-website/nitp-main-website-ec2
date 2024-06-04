
import React, { useEffect, useState } from "react";
import SEO from "../components/seo";
import Facultyprofile from "../components/global/facultyprofile";
import { useLocation } from "@reach/router"; // Gatsby uses @reach/router

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Csefacultyprofilepage = () => {
  const query = useQuery();
  const id = query.get("id");
  const [validId, setValidId] = useState(id && id.endsWith("nitp.ac.in"));

  useEffect(() => {
    if (id && id.endsWith("nitp.ac.in")) {
      setValidId(true);
    } else {
      setValidId(false);
    }
  }, [id]);

  if (!validId) {
    return null;
  }

  return (
    <>
      <SEO title="Faculty Profile" />
      <Facultyprofile key={id} url={`${process.env.GATSBY_API_URL}/api/faculty/${id}`} />
    </>
  );
};

export default Csefacultyprofilepage;
