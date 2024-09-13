import React, { useState } from "react";
import Courseug from "./Civil BTech CourseStructure";
import Coursephd from "./cephd";
import Coursepg from "./cemtech";
import Coursedd from "./cedd.js";
import { TabPage } from "../../styles/tabpage";
import { PageLayout } from "../../styles/pagelayout";

const Cesyllabus = () => {
  const [course, setCourse] = useState("programmesug");
  const [syllabus, setSyllabus] = useState(Courseug);

  return (
    <>
      <PageLayout style={{ marginTop: "10vh", marginBottom: "15vh" }}>
        <TabPage>
          <div className="mainDiv syllabus-page" style={{ width: "90vw" }}>
            <div className="row rowmarl3">
              <div className="digital">
                <h1 style={{ marginBottom: "1rem" }}>Syllabus</h1>
                <h2 data-aos="zoom-in-right">- Civil Engineering</h2>
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
                      setCourse("programmespg");
                      setSyllabus(Coursepg);
                    }}
                    className={course === "programmespg" ? "btnactive" : ""}
                  >
                    PG (M.tech/MURP) Courses
                  </button>
                  
                  <button
                    onClick={() => {
                      setCourse("programmesdd");
                      setSyllabus(Coursedd);
                    }}
                    className={course === "programmesdd" ? "btnactive" : ""}
                  >
                    Dual Degree
                  </button>
                </div>
              </div>
            </div>

            {/* Conditional rendering for UG Courses */}
            {course === "programmesug" && (
              <ul>
                <li>
                  <a href="https://drive.google.com/file/d/1TTblz48XLiUYs5JRHlqa37VWqpyWXb_w/view?usp=drivesdk">
                  B.Tech Civil Engineering (Effective from 2022-2023 onward)
                  </a>
                </li>
              </ul>
            )}

            {/* Conditional rendering for PG Courses */}
            {course === "programmespg" && (
              <ul>
              <li>
                <a href="https://drive.google.com/file/d/16XTey9OYvtOJFERcuBfNXlzZU_NskNEg/view?usp=drivesdk">
                  M.Tech Water Resources Engineering (Effective from 2021-2022 onward)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1fXR4RROFC2UQo461jiNn7--ZQJoN384i/view?usp=drivesdk">
                  M.Tech Transportation Engineering (Effective from 2021-2022 onward)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1q8Wndh5pM4EcILaTqfafpnag20XqOtS6/view?usp=drivesdk">
                  M.Tech Structural Engineering (Effective from 2021-2022 onward)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1-r7SS3hmSbMl52e2VIqJnti8yPlLWiLa/view?usp=drivesdk">
                  M.Tech Geotechnical Engineering (Effective from 2021-2022 onward)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1X57Lq9nCBjK7Db8m990hYBuj_81tRfkE/view?usp=drivesdk">
                  M.Tech Environmental Engineering (Effective from 2021-2022 onward)
                </a>
              </li>
            </ul>
            
            )}

           
            {/* Conditional rendering for Dual Degree */}
            {course === "programmesdd" && (
              <ul>
                <li>
                  <a href="https://drive.google.com/file/d/1jsKFA6qu4OGyIJSAf8Bp6Ow8Wz2houq0/view?usp=drivesdk">
                    Dual Degree (B.Tech (Civil Engineering) + M.Tech (Construction Technology Management)) Effective from 2022-2023 onward
                  </a>
                </li>
              </ul>
            )}
          </div>
        </TabPage>
      </PageLayout>
    </>
  );
};

export default Cesyllabus;
