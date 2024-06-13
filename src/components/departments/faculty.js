import axios from "axios";
import React, { useEffect, useState } from "react";
import Facultycard from "../global/facultycard";
import { PageLayout } from "../styles/pagelayout";
import { SearchStyle } from "../styles/SearchStyle";

const Facultypage = ({ title, url, dept }) => {
  const [faculties, setFaculties] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const department = url === "faculties";

  let facultiesUrl = `${process.env.GATSBY_API_URL}/api/faculty/${url}`;

  useEffect(() => {
    axios
      .get(facultiesUrl)
      .then(res => {
        const facultyData = res.data;
        facultyData.sort((a, b) => a.name.localeCompare(b.name));
        setFaculties(facultyData);
        setData(facultyData);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    let result = faculties?.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(result);
  }, [search, faculties]);

  const FacultyStyle = PageLayout;

  const renderFacultiesByDesignation = (designations, title) => {
    const filteredFaculties = data.filter(faculty =>
      designations.includes(faculty.designation)
    );

    if (filteredFaculties.length === 0) return null;

    return (
      <div key={title}>
        <h2>{title}</h2>
        <div className="row facultyrow">
          {filteredFaculties.map(faculty => (
            <Facultycard
              key={faculty.id}
              name={faculty.name}
              subtitle={department ? faculty.department : null}
              email={faculty.email}
              extn={faculty.ext_no}
              id={faculty.email}
              research={faculty.research_interest}
              image={faculty.image}
              desg={faculty.designation}
              dept={faculty.department}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderRegistrar = () => {
    const registrars = data.filter(faculty => faculty.designation === "Registrar");

    if (registrars.length === 0) return null;

    return (
      <div key="Registrar">
        <h2>Registrar</h2>
        <div className="row facultyrow">
          {registrars.map(faculty => (
            <Facultycard
              key={faculty.id}
              name="Dr. Asit Narayan"
              subtitle={null}
              email="asit.narayan@nitp.ac.in"
              extn="0"
              id="asit.narayan@nitp.ac.in"
              research=""
              image={null}
              desg="Registrar"
              dept="Officers"
            />
          ))}
        </div>
      </div>
    );
  };

  const renderRemainingFaculties = () => {
    const classifiedDesignations = [
      "Professor & HOD",
      "Associate Professor & HOD",
      "Professor & HoD",
      "Associate Professor & HoD",
      "HoD & Professor",
      "HoD & Associate Professor",
      "HoD and Professor",
      "Professor",
      "Associate Professor",
      "Assistant Professor",
      "Registrar"
    ];

    const remainingFaculties = data.filter(
      faculty => !classifiedDesignations.includes(faculty.designation)
    );

    if (remainingFaculties.length === 0) return null;

    return (
      <div key="Others">
        <div className="row facultyrow">
          {remainingFaculties.map(faculty => (
            <Facultycard
              key={faculty.id}
              name={faculty.name}
              subtitle={department ? faculty.department : null}
              email={faculty.email}
              extn={faculty.ext_no}
              id={faculty.email}
              research={faculty.research_interest}
              image={faculty.image}
              desg={faculty.designation}
              dept={faculty.department}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <FacultyStyle style={{ marginBottom: `3vh`, marginTop: `1rem` }}>
        <div className="faculty-page">
          <div className="layoutrow">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right" style={{ fontSize: `30px`, paddingTop: `1rem` }}>
                  {title ? title : "Faculty"}
                </h1>
                {dept && (
                  <div className="row">
                    <h2 data-aos="zoom-in-right">{dept}</h2>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <SearchStyle>
                  <div className="form-search">
                    <input
                      type="search"
                      placeholder="Search"
                      onChange={e => setSearch(e.target.value)}
                    />
                  </div>
                </SearchStyle>
              </div>
            </div>
          </div>
          {renderFacultiesByDesignation(["Professor & HOD", "Associate Professor & HOD", "Professor & HoD", "Associate Professor & HoD", "HoD & Professor", "HoD & Associate Professor", "HoD and Professor"], "Head of Department")}
          {renderFacultiesByDesignation(["Professor"], "Professor")}
          {renderFacultiesByDesignation(["Associate Professor"], "Associate Professor")}
          {renderFacultiesByDesignation(["Assistant Professor"], "Assistant Professor")}
          {renderRegistrar()}
          {renderRemainingFaculties()}
        </div>
      </FacultyStyle>
    </>
  );
};

export default Facultypage;
