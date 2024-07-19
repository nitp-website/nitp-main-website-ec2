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
        let facultyData = res.data;
        
        // Filter out "Officers" if the URL is for all faculties
        if (url === "faculties") {
          facultyData = facultyData.filter(faculty => faculty.department !== "Officers");
        }

        facultyData.sort((a, b) => a.name.localeCompare(b.name));
        setFaculties(facultyData);
        setData(facultyData);
      })
      .catch(e => {
        console.log(e);
      });
  }, [facultiesUrl, url]);

  useEffect(() => {
    let result = faculties?.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(result);
  }, [search, faculties]);

  const FacultyStyle = PageLayout;

  const reorderFaculties = () => {
    const priorityOrder = [
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
      "Temporary Faculty"
    ];

    return data.sort((a, b) => {
      const aPriority = priorityOrder.indexOf(a.designation);
      const bPriority = priorityOrder.indexOf(b.designation);

      if (aPriority === -1) return 1; // a is not in priority list
      if (bPriority === -1) return -1; // b is not in priority list

      return aPriority - bPriority;
    });
  };

  const sortedFaculties = reorderFaculties();

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
          <div className="row facultyrow">
            {sortedFaculties.map(faculty => (
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
      </FacultyStyle>
    </>
  );
};

export default Facultypage;
