"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BISdashboard = () => {
  const uri =
    "https://www.services.bis.gov.in/php/BIS_2.0/dgdashboard/Standards_master/get_academic_dashboard_banner_scroll_items/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("Instemailid", "amit@nitp.ac.in");
        formData.append("Loginid", "bisscmd");
        formData.append("Loginpwd", "SNr@12#$%&!Rk");

        const res = await fetch(uri, {
          method: "POST",
          body: formData,
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        console.log("Fetched data:", result);
        if (
          result.status === "success" &&
          Array.isArray(result.banner_scroll_data)
        ) {
          setData(result.banner_scroll_data);
        } else {
          console.error("Unexpected data format:", result);
          setError("Unexpected data format");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log("Data state:", data);
  return (
    <div className="bis-dashboard">
      <h1 className="heading">BIS DASHBOARD</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.created_at}</td>
                  <td>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View More
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <style jsx>{`
        .bis-dashboard {
          padding: 45px;
          margin-top: 55px;
        }

        .heading {
          text-align: center;
          margin-bottom: 20px;
        }

        .table-container {
          overflow-x: auto;
        }

        .styled-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 18px;
          text-align: left;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .styled-table thead tr {
          background-color: #009879;
          color: #ffffff;
          text-align: left;
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

const BISpage = () => (
  <Layout>
    <SEO title="BIS" />
    <BISdashboard url="faculties" title="BIS Dashboard" />
  </Layout>
);

export default BISpage;
