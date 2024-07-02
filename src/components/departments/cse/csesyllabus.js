import React, { useEffect, useState } from "react";
import Courseug from "./cse BTech CourseStructure";
import Coursephd from "./phd course";
import Mtech from "./cse MTech CourseStructure";
import Courseug_nep21 from "./cse Btech NEP21";
import Course_CSEBtech22_onwards from "./cse Btech 2022 Onwards";
import Course_DD_CyberSecurity from "./cse Dual Degree CyberSecurity";
import Course_DD_DataScience from "./cse Dual Degree DataScience";
import Course_MCA_DataScience from "./cse MCA DS & I";
import Course_MCA_ArtificialIntelligence from "./cse MCA AI & IOT"
import Course_MTech_CS from "./cse Mtech CS"
import Course_MTech_DS from "./cse MTech DS"
import { PageLayout } from "../../styles/pagelayout";
import { TabPage } from "../../styles/tabpage";
import Table from "../../table";
import filelink from "./FilePath.json"; 


const Csesyllabus = () => {
  const [course, setCourse] = useState("programmesug");
  const [syllabus, setSyllabus] = useState(Courseug);

  const addUrl = (syllabusData, folderName) => {
    return syllabusData.map((item) => ({
      ...item,
      url: `https://web.nitp.ac.in/dept/cse/syllabus/${folderName}/${item.coursecode}_${item.coursetitle}.docx`,
    }));
  };
  const addurlMcads = (syllabusData) => {
    return syllabusData.map((item) => {
      const fileName = `${item.coursecode}_${item.coursetitle}.docx`;
      const mcaData = filelink.MCA_DS_I.find((mcaItem) => mcaItem.Name === fileName);

      if (mcaData) {
        return {
          ...item,
          url: mcaData.URL,
        };
      } else {
        return {
          ...item,
        };
      }
    });
  };
  const addurlMcaAI = (syllabusData) => {
    return syllabusData.map((item) => {
      // const fileName = `${item.coursecode}_${item.coursetitle}.docx`;
      // const mcaData = filelink.MCA_AI_IOT.find((mcaItem) => mcaItem.Name === fileName);
      const mcaData = filelink.MCA_AI_IOT.find(mcaData => mcaData.Name.startsWith(item.coursecode));


      if (mcaData) {
        return {
          ...item,
          url: mcaData.URL,
        };
      } else {
        return {
          ...item,
        };
      }
    });
  };
  const addurlMTechCyber = (syllabusData) => {
    return syllabusData.map((item) => {
      // const fileName = `${item.coursecode}_${item.coursetitle}.docx`;
      // const MTechCSData = filelink.MTECH_CS.find((MTechCSData) => MTechCSData.Name === fileName);
      const MTechCSData = filelink.MTECH_CS.find(MTechCSData => MTechCSData.Name.startsWith(item.coursecode));

      if (MTechCSData) {
        return {
          ...item,
          url: MTechCSData.URL,
        };
      } else {
        return {
          ...item,
        };
      }
    });
  };
  const addurlMTechData = (syllabusData) => {
    return syllabusData.map((item) => {
      // const fileName = `${item.coursecode}_${item.coursetitle}.docx`;
      // const MTechCSData = filelink.MTECH_CS.find((MTechCSData) => MTechCSData.Name === fileName);
      const MTechDSData = filelink.MTECH_DS.find(MTechDSData => MTechDSData.Name.startsWith(item.coursecode));

      if (MTechDSData) {
        return {
          ...item,
          url: MTechDSData.URL,
        };
      } else {
        return {
          ...item,
        };
      }
    });
  };



  useEffect(() => {}, [course]);

  return (
    <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
      <TabPage>
        <div className="mainDiv syllabus-page" style={{ width: "90vw" }}>
          <div className="row rowmarl3">
            <div className="digital">
              <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
              <h2 data-aos="zoom-in-right"> -Computer Science and Engineering</h2>
              <br />
              <div className="probutton">
                <button
                  onClick={() => {
                    setCourse("programmesug");
                    setSyllabus(Courseug);
                  }}
                  className={course === "programmesug" ? "btnactive" : ""}
                >
                  UG Courses
                </button>
                <button
                  onClick={() => {
                    setCourse("programmesugnep21");
                    setSyllabus(Courseug_nep21);
                  }}
                  className={course === "programmesugnep21" ? "btnactive" : ""}
                >
                  UG Courses-2021
                </button>
                <button
                  onClick={() => {
                    setCourse("programmesug22_onwards");
                    setSyllabus(addUrl(Course_CSEBtech22_onwards, "syllabus_btech_2021_onwards"));
                  }}
                  className={course === "programmesug22_onwards" ? "btnactive" : ""}
                >
                  UG Courses-2022 Onwards
                </button>
                {/* <button
                  onClick={() => {
                    setCourse("programmespg");
                    setSyllabus(Mtech);
                  }}
                  className={course === "programmespg" ? "btnactive" : ""}
                >
                  PG (M.Tech/MURP) Courses
                </button> */}


                <button
                  onClick={() => {
                    setCourse("mtechcyber");
                    setSyllabus(addurlMTechCyber(Course_MTech_CS, "syllabus_of_M.Tech_CS"));
                  }}
                  className={course === "mtechcyber" ? "btnactive" : ""}
                >
                  M.Tech Cyber Security
                </button>

                {/* <button
                  onClick={() => {
                    setCourse("MCA program AI");
                    setSyllabus(addurlMcaAI(Course_MCA_ArtificialIntelligence, "syllabus_of_MCA_Program_AI"));
                  }}
                  className={course === "programmes_MCA_AI" ? "btnactive" : ""}
                >
                  MCA (AI & IOT)
                </button> */}

<button
                  onClick={() => {
                    setCourse("mtechdata");
                    setSyllabus(addurlMTechData(Course_MTech_DS, "syllabus_of_M.Tech_DS"));
                  }}
                  className={course === "mtechdata" ? "btnactive" : ""}
                >
                  M.Tech DataScience
                </button>



                <button
                  onClick={() => {
                    setCourse("programmesphd");
                    setSyllabus(Coursephd);
                  }}
                  className={course === "programmesphd" ? "btnactive" : ""}
                >
                  PhD Courses
                </button>
                <button
                  onClick={() => {
                    setCourse("programmes_dd_cyber_security");
                    setSyllabus(addUrl(Course_DD_CyberSecurity, "syllabus_dual_degree_cyber_security"));
                  }}
                  className={course === "programmes_dd_cyber_security" ? "btnactive" : ""}
                >
                  Dual Degree (Cyber Security)
                </button>
                <button
                  onClick={() => {
                    setCourse("programmes_dd_data_science");
                    setSyllabus(addUrl(Course_DD_DataScience, "syllabus_dual_degree_data_science"));
                  }}
                  className={course === "programmes_dd_data_science" ? "btnactive" : ""}
                >
                  Dual Degree (Data Science and Engineering)
                </button>
                <button
                  onClick={() => {
                    setCourse("MCA program DS");
                    setSyllabus(addurlMcads(Course_MCA_DataScience, "syllabus_of_MCA_Program_DS"));
                  }}
                  className={course === "programmes_MCA_DS" ? "btnactive" : ""}
                >
                  MCA (DS & I)
                </button>
                <button
                  onClick={() => {
                    setCourse("MCA program AI");
                    setSyllabus(addurlMcaAI(Course_MCA_ArtificialIntelligence, "syllabus_of_MCA_Program_AI"));
                  }}
                  className={course === "programmes_MCA_AI" ? "btnactive" : ""}
                >
                  MCA (AI & IOT)
                </button>
              </div>
            </div>
          </div>
          {syllabus === Mtech && (
            <ul className="rowmarl3 layoutrow">
              <li>
                <a
                  href="https://drive.google.com/file/d/10lMN1S9iJlBIf8iJfvlx4stTA6j0fQfN/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>PG(M.Tech/MURP) syllabus course</h3>
                </a>
              </li>
            </ul>
          )}
          
          {Array.isArray(syllabus) && syllabus.length > 0 && (
            <Table style={{ width: "100%", marginTop: "20px" }}>
              <thead>
                <tr className="syllabus-table-head">
                  <th>Dept.</th>
                  <th>Sem/Electives</th>
                  <th>Course Code</th>
                  <th>Course Title</th>
                  <th>L</th>
                  <th>T</th>
                  <th>P</th>
                  <th>Credits</th>
                </tr>
              </thead>
              <tbody>
                {syllabus.map((elem, index) => (
                  <tr key={index} className="syllabus-table-row">
                    <td>{elem.dept}</td>
                    <td>{elem.sem_elect}</td>
                    <td>{elem.coursecode}</td>
                    <td>
                      <a href={elem.url} target="_blank" rel="noopener noreferrer">
                        {elem.coursetitle}
                      </a>
                    </td>
                    <td>{elem.l}</td>
                    <td>{elem.t}</td>
                    <td>{elem.p}</td>
                    <td>{elem.credits}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </TabPage>
    </PageLayout>
  );
};

export default Csesyllabus;
