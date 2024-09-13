"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const fetchFacultyName = async (email) => {
  const response = await fetch(
    `https://admin.nitp.ac.in/api/faculty/${email}`
  );
  const data = await response.json();
  return data.profile.name;
};

const PatentsTable = () => {
  const [patents, setPatents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPatents = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://admin.nitp.ac.in/api/publications/all"
      );
      const data = await response.json();

      const patentData = data.filter((item) =>
        item.publications.some(
          (publication) => publication.type === "patent"
        )
      );

      const patentsWithFaculty = [];
      for (const patent of patentData) {
        const facultyName = await fetchFacultyName(patent.email);
        for (const publication of patent.publications) {
          if (publication.type === "patent") {

          
            patentsWithFaculty.sort((a, b) => b.year - a.year);

            patentsWithFaculty.push({
              ...patent,
              facultyName,
              year: publication.year,
              filedyear: publication.yearfiled,
              nationality: publication.nationality,
              number: publication.number,
              citationKey: publication.citation_key,
            });
            
          }
        }
      }
          // Sort the patentsWithFaculty array after the loop
       
    patentsWithFaculty.sort((a, b) => b.year - a.year);
    patentsWithFaculty.sort((a, b) => {
      // Sort by year first
      if (a.year !== b.year) {
        return b.year - a.year;
      } else {
        // If years are equal, prioritize patents with filedYear
        if (a.filedyear && b.filedyear) {
          // If both have filedYear, sort by filedYear in descending order
          return b.filedyear - a.filedyear;
        } else if (a.filedyear) {
          // If only 'a' has filedYear, move it to the end
          return 1; 
        } else if (b.filedyear) {
          // If only 'b' has filedYear, keep it in its current position
          return -1;
        } else {
          // If neither has filedYear, keep them in their current positions
          return 0;
        }
      }
    });
    patentsWithFaculty.sort((a, b) => a.year - b.year);
    patentsWithFaculty.sort((a, b) => b.year - a.year);
      setPatents(patentsWithFaculty);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPatents();
  }, []);

  useEffect(() => {
    fetchPatents();
  }, []);

  // Function to handle search bar input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter patents based on search term
  const filteredPatents = patents.filter((patent) => {

    return patent.facultyName.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div className="patent-dashboard">
      <h1 className="heading">Patents Dashboard</h1>
      <ul class="patent-links">
  <li><a href="https://docs.google.com/spreadsheets/d/19SctvCuQT8ImxxLTgxE-rROL5LjNsXbD/edit?usp=drive_link" target="_blank">Granted Patents [View]</a></li>
  <li><a href="https://docs.google.com/spreadsheets/d/19yd690MT3gUtTA_w9b9GkMI2zpq7XzkU/edit?usp=drive_link" target="_blank">Published Patents [View]</a></li>
</ul>
        {/* {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="table-container">
          <input
            type="text"
            placeholder="Search by Faculty Name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />

          <table className="styled-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Faculty Name</th>
                <th>Year</th>
                <th>Filed Year</th>
                <th>Nationality</th>
                <th>Number</th>
                <th>Citation Key</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatents.map((patent, index) => (
                <tr key={`${patent.email}-${patent.year}-${patent.number}`}>
                  <td>{index + 1}</td>
                  <td>{patent.facultyName}</td>
                  <td>{patent.year}</td>
                  <td>{patent.filedyear}</td>
                  <td>{patent.nationality}</td>
                  <td>{patent.number}</td>
                  <td>{patent.citationKey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
      <style jsx>{`
        .patent-dashboard {
          padding: 45px;
          margin-top: 55px;
        }
.patent-links {
  list-style-type: disc; /* Adds bullet points */
  padding-left: 20px; /* Indentation for bullets */
}

.patent-links a {
  text-decoration: none; /* Removes underline */
  color: black; /* Optional: Set link color */
  font-size:20px;
}

.patent-links a:hover {
  text-decoration: underline; /* Optional: Adds underline on hover */
}

        .heading {
          text-align: center;
          margin-bottom: 20px;
        }
        .search-bar {
          display: block;
          margin: 0 0 20px auto;
          padding: 10px;
          font-size: 16px;
          width: 80%;
          max-width: 400px;
        }
        .table-container {
          overflow-x: auto;
          max-height: 600px; /* Adjust this height as needed */
        }

        .search-bar {
          margin-bottom: 20px;
        }

        .styled-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 18px;
          text-align: left;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .styled-table thead th {
          background-color: #009879;
          color: #ffffff;
          text-align: left;
          padding: 12px 15px;
          position: sticky;
          top: 0;
          z-index: 2;
        }

        .styled-table th,
        .styled-table td {
          padding: 12px 15px;
        }

        .styled-table tbody tr {
          border-bottom: 1px solid #dddddd;
        }

        .styled-table tbody tr:nth-of-type(even) {
          background-color: #f3f3f3;
        }

        .styled-table tbody tr:last-of-type {
          border-bottom: 2px solid #009879;
        }

        .styled-table tbody tr.active-row {
          font-weight: bold;
          color: #009879;
        }

        @media (max-width: 768px) {
          .styled-table {
            font-size: 14px;
          }

          .styled-table th,
          .styled-table td {
            padding: 10px;
          }

          .heading {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .styled-table {
            font-size: 12px;
          }

          .styled-table th,
          .styled-table td {
            padding: 8px;
          }

          .heading {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

const PatentsPage = () => (
  <Layout>
    <SEO title="Patents" />
    <PatentsTable url="faculties" title="Patents Dashboard" />
  </Layout>
);

export default PatentsPage;