import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import mail from "./img/mail.svg";
import Layout from "../layout";
import { FacultyProfile } from "../styles/facultyprofile";

const Facultyprofile = ({ url }) => {
  const [data, setData] = useState({
    profile: {},
    publications: [],
    subjects: [],
    memberships: [],
    qualification: [],
    pg_ug: [],
    currResponsibility: [],
    pastResponsibility: [],
    patents: [],
    books: [],
    journals: [],
    conferences: [],
    articles: [],
    projects: [],
    services: [],
    workExperience: [],
    phdCandidates: []
  });

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(url);
      const detail = res.data;
      setData({
        profile: detail.profile || {},
        publications: detail.publications ? detail.publications[0] : [],
        subjects: detail.subjects_teaching || [],
        memberships: detail.memberships || [],
        qualification: detail.education || [],
        pg_ug: detail.pg_ug_projects || [],
        currResponsibility: detail.curr_admin_responsibility || [],
        pastResponsibility: detail.past_admin_responsibility || [],
        patents: detail.publications && detail.publications[0]?.publications 
          ? JSON.parse(detail.publications[0].publications).filter(x => x.type === "patent") 
          : [],
        books: detail.publications && detail.publications[0]?.publications 
          ? JSON.parse(detail.publications[0].publications).filter(x => x.type === "book") 
          : [],
        journals: detail.journals || [],
        conferences: detail.publications && detail.publications[0]?.publications 
          ? JSON.parse(detail.publications[0].publications).filter(x => x.type === "conference") 
          : [],
        articles: detail.publications && detail.publications[0]?.publications 
          ? JSON.parse(detail.publications[0].publications).filter(x => x.type === "article") 
          : [],
        projects: detail.project || [],
        services: detail.professional_service || [],
        workExperience: detail.work_experience || [],
        phdCandidates: detail.phd_candidates || []
      });
    } catch (e) {
      console.log(e);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const handleScroll = () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (window.innerWidth > 768) {
          const imgRow = document.querySelector(".faculty-img-row");
          if (imgRow) {
            imgRow.style.marginTop = "-4vh";
          }
        }
      } else {
        const imgRow = document.querySelector(".faculty-img-row");
        if (imgRow) {
          imgRow.style.marginTop = "3vh";
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {data && (
        <Layout department={data.profile.department}>
          <FacultyProfile className="row">
            <div className="faculty-img-row">
              <div className="faculty-img-wrap">
                <img
                  src={data.profile.image || "/faculty.png"}
                  className="facultypic"
                  alt="Faculty"
                />
              </div>
              <a href={`mailto:${data.profile.email}`} target="blank" rel="noopener noreferrer">
                <img src={mail} className="img-fluid facmail" alt="Email" />
              </a>
              <h2>{data.profile.name}</h2>
              <h3>{data.profile.designation}</h3>

              {data.profile.cv && (
                <div>
                  <a href="#cv">
                    <button className="cv-btn" color="primary" variant="contained">
                      View CV
                    </button>
                  </a>
                </div>
              )}

              {data.publications.pub_pdf && (
                <div>
                  <a href="#pub_pdf">
                    <button className="cv-btn" color="primary" variant="contained">
                      View Publications
                    </button>
                  </a>
                </div>
              )}

              {/* SOCIAL MEDIA LINKS */}
              {data.profile.personal_webpage && (
                <div style={{ margin: "3px" }}>
                  <a href={data.profile.personal_webpage}>
                    <button className="cv-btn" color="primary" variant="contained">
                      Personal Webpage
                    </button>
                  </a>
                </div>
              )}
              <div className="link-card">
                {data.profile.linkedin && (
                  <span className="link-icon">
                    <a href={data.profile.linkedin}>
                      <img src={"/linkedin.svg"} alt="Linkedin" />
                    </a>
                  </span>
                )}
                {data.profile.google_scholar && (
                  <span className="link-icon">
                    <a href={data.profile.google_scholar}>
                      <img src={"/googleScholar.svg"} alt="Google Scholar" />
                    </a>
                  </span>
                )}
                {data.profile.scopus && (
                  <span>
                    <a href={data.profile.scopus}>
                      <img src={"/scopus.svg"} alt="Scopus" />
                    </a>
                  </span>
                )}
                {data.profile.vidwan && (
                  <span>
                    <a href={data.profile.vidwan}>
                      <img src={"/vidwan.svg"} alt="Vidwan" />
                    </a>
                  </span>
                )}
                {data.profile.orcid && (
                  <span>
                    <a href={data.profile.orcid}>
                      <img src={"/orcid.svg"} alt="Orcid" />
                    </a>
                  </span>
                )}
              </div>
            </div>

            {/* CV and Publications Popups */}
            {data.profile.cv && (
              <div id="cv" className="cv">
                <a href="#" className="close">
                  <div className="popup">
                    <div className="close">X</div>
                    <div className="content">
                      <iframe
                        src={`https://drive.google.com/file/d/${data.profile.cv.split("id=").pop()}/preview`}
                        width="100%"
                        height="100%"
                        title="CV"
                      ></iframe>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {data.publications.pub_pdf && (
              <div id="pub_pdf" className="cv">
                <a href="#" className="close">
                  <div className="popup">
                    <div className="close">X</div>
                    <div className="content">
                      <iframe
                        src={`${data.publications.pub_pdf.split("view")[0]}/preview?usp=drivesdk`}
                        width="100%"
                        height="100%"
                        title="Publications"
                      ></iframe>
                    </div>
                  </div>
                </a>
              </div>
            )}

            {/* Faculty Details */}
            <div className="faculty-details-row">
              <h1>Profile</h1>
              <div className="fac-card" data-aos="fade-up">
                <h3>
                  {data.profile.department === "Officers"
                    ? "Responsibilities:-"
                    : "Research Interest:-"}
                </h3>
                <p>{data.profile.research_interest}</p>
                <div style={{ display: "flex" }} className="row">
                  <div className="col-6">
                    <h3>Email:-</h3>
                    <p>{data.profile.email}</p>
                  </div>
                  <div className="col-6">
                    <h3>Phone:-</h3>
                    <p>{data.profile.ext_no}</p>
                  </div>
                </div>
              </div>

              {/* Subjects */}
              {data.subjects.length > 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Subjects</h3>
                  <div className="factable">
                    <table>
                      {data.subjects.map((item, index) => (
                        <p key={index}>
                          {item.code} {item.name} {item.start || ""} {item.end || ""}
                        </p>
                      ))}
                    </table>
                  </div>
                </div>
              )}

              {/* Memberships */}
              {data.memberships.length > 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Memberships & Society</h3>
                  <div className="factable">
                    <table>
                      {data.memberships.map((item, index) => (
                        <p key={index}>
                          {item.membership_name} {item.type} {item.date || ""}
                        </p>
                      ))}
                    </table>
                  </div>
                </div>
              )}

              {/* Qualifications */}
              {data.qualification.length > 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Qualification</h3>
                  <div className="factable">
                    <table>
                      {data.qualification.map((item, index) => (
                        <p key={index}>
                          {item.degree} {item.department} {item.college}{" "}
                          {item.passing_year}
                        </p>
                      ))}
                    </table>
                  </div>
                </div>
              )}

              {/* Other sections (Work Experience, Research Projects, etc.) can be added similarly */}
            </div>
          </FacultyProfile>
        </Layout>
      )}
    </>
  );
};

export default Facultyprofile;
