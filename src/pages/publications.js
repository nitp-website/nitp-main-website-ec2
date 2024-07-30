"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const fetchFacultyDetails = async (email) => {
  try {
    const response = await fetch(`https://admin.nitp.ac.in/api/faculty/${email}`);
    const data = await response.json();
    return {
      name: data.profile.name,
      department: data.profile.department,
    };
  } catch (error) {
    console.error("Error fetching faculty details:", error);
    return { name: "", department: "Computer Science and Engineering" };
  }
};

const ArticlesTable = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collapsedYears, setCollapsedYears] = useState({});

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://admin.nitp.ac.in/api/publications/all"
      );
      const data = await response.json();

      const articleData = data.filter((item) =>
        item.publications.some(
          (publication) => publication.type === "article"
        )
      );

      const articlesWithFaculty = [];
      for (const article of articleData) {
        const { department } = await fetchFacultyDetails(article.email);
        for (const publication of article.publications) {
          if (publication.type === "article" && /^\d{4}$/.test(publication.year)) {
            articlesWithFaculty.push({
              ...article,
              department,
              year: publication.year,
              title: publication.title,
              authors: publication.authors,
              journal: publication.journal_name,
            });
          }
        }
      }

      // Group and sort articles by department and year
      const groupedByYear = articlesWithFaculty.reduce((acc, article) => {
        if (!acc[article.year]) {
          acc[article.year] = {};
        }
        if (!acc[article.year][article.department]) {
          acc[article.year][article.department] = [];
        }
        acc[article.year][article.department].push(article);
        return acc;
      }, {});

      Object.keys(groupedByYear).forEach((year) => {
        Object.keys(groupedByYear[year]).forEach((department) => {
          groupedByYear[year][department].sort((a, b) => b.year - a.year);
        });
      });

      setArticles(groupedByYear);
    } catch (error) {
      setError(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const formatArticle = (article) => {
    return `${article.authors}, "${article.title}," ${article.journal}, (${article.year})`;
  };

  const toggleYear = (year) => {
    setCollapsedYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <div className="articles-dashboard ">
      <h1 className="heading">Publications</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="table-container">
          {Object.keys(articles)
            .sort((a, b) => b - a) // Sort years in descending order
            .map((year) => (
              <div key={year}>
                <h2 className="year-heading" onClick={() => toggleYear(year)}>
                  {year}
                </h2>
                {(year === "2024" || !collapsedYears[year]) && (
                  <div>
                    {Object.keys(articles[year]).map((department) => (
                      <div key={department}>
                        <h3 className="department-heading">{department}</h3>
                        <div className="factable">
                          {articles[year][department].map((article, index) => (
                            <div key={index} className="article">
                              <ul>
                                <li>
                                  <p>{formatArticle(article)}</p>
                                </li>
                              </ul>
                            </div>
                          ))}
                          <p className="counttotal">{`${department} Department has published ${articles[year][department].length} articles in ${year}`}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
      <style jsx>{`
        .articles-dashboard {
          padding: 50px;
        }

        .heading {
          text-align: center;
          padding-top:40px;
          margin-bottom: 20px;
        }
        .counttotal{
          text-align: center;
          color:#DC143C;
          }

        .year-heading {
          margin-top: 30px;
          font-size: 24px;
          color: #333;
          cursor: pointer;
          text-align: center;
        }

        .department-heading {
          margin-top: 20px;
          font-size: 20px;
          color: #A52A2A;
        }

        .factable {
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .article {
          padding: 10px;
          background: #f9f9f9;
          margin-bottom: 10px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .article p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 24px;
          }

          .year-heading {
            font-size: 20px;
          }

          .department-heading {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .heading {
            font-size: 20px;
          }

          .year-heading {
            font-size: 18px;
          }

          .department-heading {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <ArticlesTable />
  </Layout>
);

export default ArticlesPage;
