"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const StaffDashboard = () => {
  const uri = "https://sheetdb.io/api/v1/r5zbvyrjy1jyj";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(uri);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        console.log("Fetched data:", result);
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="staff-dashboard">
      <h1 className="heading">NonTeaching Staff</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Name</th>
                <th>Department/Section</th>
                <th>Designation</th>
                <th>E-Mail ID</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item['Sl. No.']}</td>
                  <td>{item.Name}</td>
                  <td>{item['Department/Section']}</td>
                  <td>{item.Designation}</td>
                  <td>{item['E-Mail ID']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <style jsx>{`
        .staff-dashboard {
          padding: 45px;
          margin-top: 55px;
        }

        .heading {
          text-align: center;
          margin-bottom: 20px;
        }

        .table-container {
          overflow-x: auto;
          max-height: 600px; /* Adjust this height as needed */
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
          background-color: #36454F;
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

const StaffPage = () => (
  <Layout>
    <SEO title="NonTeaching Staff" />
    <StaffDashboard />
  </Layout>
);

export default StaffPage;
