import React, { useEffect, useState } from "react";
import Courseug from "./cse BTech CourseStructure";
import Coursephd from "./phd course";
import Mtech from "./cse MTech CourseStructure";
import Courseug_nep21 from "./cse Btech NEP21";
import Course_CSEBtech22_onwards from "./cse Btech 2022 Onwards";
import Course_DD_CyberSecurity from "./cse Dual Degree CyberSecurity";
import Course_DD_DataScience from "./cse Dual Degree DataScience";
import { PageLayout } from "../../styles/pagelayout";
import { TabPage } from "../../styles/tabpage";
import Table from "../../table";

const Csesyllabus = () => {
  const [course, setCourse] = useState("programmesug");
  const [syllabus, setSyllabus] = useState(Courseug);

  const addUrl = (syllabusData, folderName) => {
    return syllabusData.map((item) => ({
      ...item,
      url: `https://web.nitp.ac.in/dept/cse/syllabus/${folderName}/${item.coursecode}_${item.coursetitle}.docx`,
    }));
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
                <button
                  onClick={() => {
                    setCourse("programmespg");
                    setSyllabus(Mtech);
                  }}
                  className={course === "programmespg" ? "btnactive" : ""}
                >
                  PG (M.Tech/MURP) Courses
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
