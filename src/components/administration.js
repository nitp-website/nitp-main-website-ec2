import React, { useState, useEffect } from "react";
import Adcard from "./administration/adcard";
import Director from "./director";
import Registrar from "./registrar";
import { AdminStyle } from "./styles/AdminStyle";
import Navigate from "./global/Navigate";
import Admin from "./administration/const";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Administrationpage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { tab } = useParams();
  const initialTab = queryParams.get("tab") || "director";
  const [view, setView] = useState(initialTab );
  const [content, setContent] = useState([]);
  const CardData = ["deans", "bog", "bwc", "idc", "fc", "senate", "suh"];

  function getView(callback) {
    setView(callback);
  }
  useEffect(() => {
    // Update tab based on URL parameter
    const tabFromUrl = queryParams.get("tab") || "director";
   
    setView(tabFromUrl);
  }, [location.search]);

  useEffect(() => {
    let temp;
    Admin.forEach((item) => {
      if (item.data === view) {
        temp = item.content;
        setContent(temp);
      }
    });
  }, [view]);

  return (
    <>
      <AdminStyle>
        <Navigate data={Admin} callback={getView} tab={tab ? tab : "director"} />

        <div className="mainDiv">
          {view === "director" && <Director id="director" />}
          {view === "registrar" && <Registrar id="registrar" />}

          {CardData.includes(view) &&
            content?.length !== 0 &&
            content?.map((item, idx) => (
              <div key={idx}>
                <Adcard
                  name={item?.name}
                  designation={item?.designation}
                  type={item?.type}
                />
              </div>
            ))}
        </div>
      </AdminStyle>
    </>
  );
};

export default Administrationpage;
