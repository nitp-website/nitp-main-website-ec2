import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { TabPage } from "./styles/tabpage";
import Navigate from "./global/Navigate";
import Notice from "./home/notice";
import AcademicsList from "./academics/const";
import acadData from "./academics/acadData";
import Navlist from "./global/navlist";
import flag from "../components/home/img/flag.svg";
import { NoticeStyle } from "./styles/notice";

const Academicspage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "admissions";
  const [tab, setTab] = useState(initialTab);
  const [notices, setNotices] = useState([]);
  const [view, setView] = useState(initialTab);



  function getView(callback) {
    setView(callback);
  }

  useEffect(() => {
    // Update tab based on URL parameter
    const tabFromUrl = queryParams.get("tab") || "admissions";
    setTab(tabFromUrl);
    setView(tabFromUrl);
  }, [location.search]);
  
  useEffect(() => {
    let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice/academics`;
    axios
      .get(noticesUrl)
      .then((res) => {
        setNotices(res.data.filter((notice) => notice.isVisible === 1));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <TabPage>
        <Navigate
          data={AcademicsList}
          callback={getView}
          tab={tab.slice(0, 10) === "programmes" ? tab : "admissions"}
        />
        <div className="mainDiv">
        {view === "admissions" && (
  <div className="layoutrow layoutrow1 rowmarl3" id="admission">
    <div>
      <div className="row">
        <h1 style={{ marginBottom: `1rem`, fontSize: '36px' }}>Admissions</h1>
      </div>
      {acadData.Admissions.map((e, index) => (
        <div className="row rowmarr3 digital" key={index}>
          <div>
            {e.heading && e.heading.startsWith("Archive") ? (
              <div style={{ fontSize: '60px', color: 'black' }}>{e.heading}</div>
            ) : (
              <>
                {e.heading && <h3 style={{ fontSize: '32px' }}>{e.heading}</h3>}
                {e.title && <h4 style={{ fontSize: '20px' }}>{e.title}</h4>}
              </>
            )}
            {e.notice && (
              <NoticeStyle>
                <p style={{ paddingRight: "24px", fontSize: '18px' }}>
                  <img id="flag" src={flag} alt="f" />
                  <a style={{ color: "OrangeRed" }}>{e.notice}</a>
                </p>
              </NoticeStyle>
            )}
           {e.data.map((item, itemIndex) => (
  <div key={itemIndex}>
    { item.para === "Course: B.Tech / BArch / MTech / March / MURP / PhD" ? (
      <h4 style={{ fontSize: '18px' }}>{item.para}</h4>
    ) : (
      <li>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: `none` }}
        >
          {item.para}
        </a>
      </li>
    )}
  </div>
))}

          </div>
        </div>
      ))}
    </div>
  </div>
)}

            
      {view.slice(0, 10) == "programmes" ? (
       <div className="row rowmarl3">
        <div className="digital">
         <h1 style={{ marginBottom: `1rem` }}>Programmes</h1>

         <div className="probutton">
          <button
           onClick={() => {
            setView("programmes")
           }}
           className={view == "programmes" ? "btnactive" : ""}
          >
           All
          </button>
          <button
           onClick={() => {
            setView("programmesug")
           }}
           className={view == "programmesug" ? "btnactive" : ""}
          >
           UG Courses
          </button>
          <button
           onClick={() => {
            setView("programmespg")
           }}
           className={view == "programmespg" ? "btnactive" : ""}
          >
           PG (M.tech/MURP) Courses
          </button>

          <button
           onClick={() => {
            setView("programmesdd")
           }}
           className={view == "programmesdd" ? "btnactive" : ""}
          >
           M.tech/MURP-PHD (DD)
          </button>
          <button
           onClick={() => {
            setView("programmesimsc")
           }}
           className={view == "programmesimsc" ? "btnactive" : ""}
          >
           Integrated Courses
          </button>
          <button
           onClick={() => {
            setView("programmesmca")
           }}
           className={view == "programmesmca" ? "btnactive" : ""}
          >
          MCA Programs
          </button>
         </div>
         {view == "programmes" && (
          <div className="row">
           <div className="digital">
            {/* <h1 style={{ marginBottom: `1rem` }}>Programmes</h1> */}
            <h3>Names of the approved programmes</h3>
            <table align="center">
             <tbody>
              <tr>
               <th>S.no.</th>
               <th>Degree/Program</th>
               <th>Branch of specialization</th>
               <th>Duration</th>
              </tr>
              <tr>
               <td colspan="4" align="center">
                <b>Under Graduate Programmes</b>
               </td>
              </tr>
              <tr>
               <td>1</td>
               <td>Bachelor of Architecture</td>
               <td>Architecture</td>
               <td>5 years</td>
              </tr>
              <tr>
               <td>2</td>
               <td rowspan="6">Bachelor of Technology</td>
               <td>Civil Engineering</td>
               <td rowspan="6">4 Years</td>
              </tr>
              <tr>
               <td>3</td>
               <td>Computer Scince &amp; Engineering</td>
              </tr>
              <tr>
               <td>4</td>
               <td> Electrical Engineering</td>
              </tr>
              <tr>
               <td>5</td>
               <td>Electronics &amp; Communication Engineering</td>
              </tr>
              <tr>
               <td>6</td>
               <td>Information Technology</td>
              </tr>
              <tr>
               <td>7</td>
               <td>Mechanical Engineering</td>
              </tr>
              <tr>
               <td colspan="4" align="center">
                <b>Post Graduate Programmes</b>
               </td>
              </tr>
              <tr>
               <td>1</td>
               <td rowspan="5">
                Master of Technology <i>(Civil Engineering)</i>
               </td>
               <td>Water Resources Engineering</td>
               <td rowspan="19">2 Years</td>
              </tr>
              <tr>
               <td>2</td>
               <td>Transportation Engineering</td>
              </tr>
              <tr>
               <td>3</td>
               <td>Structural Engineering</td>
              </tr>
              <tr>
               <td>4</td>
               <td>Environmental Engineering</td>
              </tr>
              <tr>
               <td>5</td>
               <td>Geotechnical Engineering</td>
              </tr>
              <tr>
               <td>6</td>
               <td rowspan="2">
                Master of Technology <i>(Electrical Engineering)</i>
               </td>
               <td>Control System Engineering</td>
              </tr>
              <tr>
               <td>7</td>
               <td>Power System Engineering</td>
              </tr>
              <tr>
               <td>8</td>
               <td rowspan="5">
                Master of Technology <i>(Mechanical Engineering)</i>
               </td>
               <td>Thermal Engineering</td>
              </tr>
              <tr>
               <td>9</td>
               <td>Production Engineering</td>
              </tr>
              <tr>
               <td>10</td>
               <td>Design Engineering</td>
              </tr>
              <tr>
               <td>11</td>
               <td>Automobile Engineering</td>
              </tr>
              <tr>
               <td>12</td>
               <td>Renewable Energy Technology</td>
              </tr>
              <tr>
               <td>13</td>
               <td rowspan="2">
                Master of Technology <i>(Computer Science &amp; Engineering)</i>
               </td>
               <td>Information Technology</td>
              </tr>
              <tr>
               <td>14</td>
               <td>Computer Science &amp; Engineering</td>
              </tr>
              <tr>
               <td>15</td>
               <td rowspan="2">
                Master of Technology{" "}
                <i>(Electronics &amp; Communication Engineering)</i>
               </td>
               <td>Communication Systems</td>
              </tr>
              <tr>
               <td>16</td>
               <td>VLSI System Design and Microelectronics</td>
              </tr>
              <tr>
               <td>17</td>
               <td>
                Master in Urban &amp; Regional Planning
                <i>(MURP)</i>
               </td>
               <td>Urban and Regional Planning</td>
              </tr>
              <tr>
               <td>18</td>
               <td>
                M. Tech (Computational Mathematics)<i></i>
               </td>
               <td>Computational Mathematics</td>
              </tr>
              <tr>
               <td>19</td>
               <td>
                M. Tech (Nanoscience and Technology)<i></i>
               </td>
               <td>Nanoscience and Technology</td>
              </tr>
              <tr>
               <td colspan="4" align="center">
                <b>Five Years Integrated Programs</b>
               </td>
              </tr>
              <tr>
               <td>1</td>
               <td>
                M. Sc.<i>(Chemistry)</i>
               </td>
               <td>Integrated M. Sc. in Chemistry</td>
               <td rowspan="3">5 Years</td>
              </tr>
              <tr>
               <td>2</td>
               <td>
                M. Sc.<i>(Mathematics)</i>
               </td>
               <td>Integrated M. Sc. in Mathematics</td>
              </tr>
              <tr>
               <td>3</td>
               <td>
                M. Sc.<i>(Physics)</i>
               </td>
               <td>Integrated M. Sc. in Physics</td>
              </tr>
              <tr>
               <td colspan="4" align="center">
                <b>MCA program</b>
               </td>
              </tr>
              <tr>
               <td>1</td>
               <td>
               Master of Computer Applications
               </td>
               <td>specialization in AI & IoT</td>
               <td rowspan="3">3 Years</td>
              </tr>
              <tr>
               <td>2</td>
               <td>
               Master of Computer Applications
               </td>
               <td>specialization in Data Science & Informatics</td>
               
              </tr>
              
             </tbody>
            </table>
           </div>
          </div>
         )}
         {view == "programmesug"
          ? acadData.courseUG.map(item => (
             <div className="digital">
              <h3
               style={{
                fontFamily: `Source Sans Pro`,
               }}
              >
               {item.title}
              </h3>
              <br />
              {item.data.map(e => (
               <>
                <a
                 href={e.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{
                  textDecoration: `none`,
                  fontFamily: `Source Sans Pro`,
                 }}
                >
                 <p
                  style={{
                   fontWeight: `bold`,
                   borderBottom: `1px dotted black`,
                   paddingBottom: `0.5rem`,
                   margin: `0 1rem`,
                  }}
                 >
                  {e.para}
                 </p>
                </a>
               </>
              ))}
             </div>
            ))
          : ""}
         {view == "programmespg"
          ? acadData.coursePG.map(item => (
             <div className="digital">
              <h3
               style={{
                fontFamily: `Source Sans Pro`,
               }}
              >
               {item.title}
              </h3>
              <br />
              {item.data.map(e => (
               <>
                <a
                 href={e.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{
                  textDecoration: `none`,
                  fontFamily: `Source Sans Pro`,
                 }}
                >
                 <p
                  style={{
                   fontWeight: `bold`,
                   borderBottom: `1px dotted black`,
                   paddingBottom: `0.5rem`,
                   margin: `0 1rem`,
                  }}
                 >
                  {e.para}
                 </p>
                </a>
               </>
              ))}
             </div>
            ))
          : ""}
         {view == "programmesdd"
          ? acadData.coursePHD.map(item => (
             <div className="digital">
              <h3
               style={{
                fontFamily: `Source Sans Pro`,
               }}
              >
               {item.title}
              </h3>
              <br />
              {item.data.map(e => (
               <>
                <a
                 href={e.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{
                  textDecoration: `none`,
                  fontFamily: `Source Sans Pro`,
                 }}
                >
                 <p
                  style={{
                   fontWeight: `bold`,
                   borderBottom: `1px dotted black`,
                   paddingBottom: `0.5rem`,
                   margin: `0 1rem`,
                  }}
                 >
                  {e.para}
                 </p>
                </a>
               </>
              ))}
             </div>
            ))
          : ""}
         {view == "programmesimsc"
          ? acadData.courseMsc.map(item => (
             <div className="digital">
              <h3
               style={{
                fontFamily: `Source Sans Pro`,
               }}
              >
               {item.title}
              </h3>
              <br />
              {item.data.map(e => (
               <>
                <a
                 href={e.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{
                  textDecoration: `none`,
                  fontFamily: `Source Sans Pro`,
                 }}
                >
                 <p
                  style={{
                   fontWeight: `bold`,
                   borderBottom: `1px dotted black`,
                   paddingBottom: `0.5rem`,
                   margin: `0 1rem`,
                  }}
                 >
                  {e.para}
                 </p>
                </a>
               </>
              ))}
             </div>
            ))
          : ""}
          {view == "programmesmca"
          ? acadData.courseMCA.map(item => (
             <div className="digital">
              <h3
               style={{
                fontFamily: `Source Sans Pro`,
               }}
              >
               {item.title}
              </h3>
              <br />
              {item.data.map(e => (
               <>
                
                 <p
                  style={{
                   fontWeight: `bold`,
                   borderBottom: `1px dotted black`,
                   paddingBottom: `0.5rem`,
                   margin: `0 1rem`,
                  }}
                 >
                  {e.para}
                 </p>
                
               </>
              ))}
             </div>
            ))
          : ""}
        </div>
       </div>
      ) : (
       ""
      )}

      {view == "depts" ? (
       <>
        <div className="row rowmarl3">
         <h1 style={{ fontFamily: `Source Sans Pro` }}>Departments</h1>
        </div>

        {/* {Navlist.departments.map((val, index) => (
                  <DynamicLink
                    key={index}
                    url={val.url}
                    data={val.data}
                    title={val.title}
                    // classvalue="nav-sidebar-div"
                  />
                  
                ))} */}

        {acadData.depts.map(item => (
         <div className="row rowmarl3">
          <div className="digital">
           <h3>{item.title}</h3>
           {item.data.map(e => (
            <>
             <a
              href={e.link}
              // target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: `none` }}
             >
              <p
               style={{
                // borderBottom: `1px dotted black`,
                paddingBottom: `0.15rem`,
                width: `fit-content`,
                margin: `0 1rem`,
               }}
              >
               {e.para}
              </p>
             </a>
            </>
           ))}
          </div>
         </div>
        ))}
       </>
      ) : (
       ""
      )}

      {view == "format" && (
       <div className="layoutrow" id="format">
        <div className="row rowmarl3">
         <h1>Formats</h1>
        </div>
        <div className="row rowmarl3 digital" >
         {acadData.format.map(item =>
          item.data.map((e, idx) => (
           <p key={idx}>
            <a
             id="formatdown"
             href={e.link}
             rel="noopener noreferrer"
             style={{
              textDecoration: `none`,
              fontWeight: `bold`,
              marginLeft: `1rem`,
             }}
             target="_blank"
            >
             Download
            </a>{" "}
            {e.para}
           </p>
          ))
         )}{" "}
        </div>

        <div className="row imgcolstyle backgroundimage">
         <img src="/paper.svg" className="img-fluid" loading="lazy" />
        </div>
       </div>
      )}
      {view == "Notices" && (
       <div className="layoutrow" id="notice">
        <div className="row imgcolstyle backgroundimage">
         <img src="/mail.svg" className="img-fluid" loading="lazy" />
        </div>

        <div className="row rowmarl3">
         <h1>Notice</h1>
        </div>
        <div className="row rowmarl3 notice">
         {notices != undefined
          ? notices.map(notice => {
             if (notice.title != "") {
              return (
               <Notice
                detail={notice.title}
                time={notice.timestamp}
                attachments={notice.attachments}
               />
              )
             }
            })
          : null}
        </div>
       </div>
      )}

      {view == "digital" ? (
       <>
        <h1 style={{ fontFamily: `Source Sans Pro` }}>
         Digital Initiatives of NIT Patna
        </h1>
        {acadData.datad.map(item => (
         <div className="row rowmarl3">
          <div className="digital">
           <h3>{item.title}</h3>

           {item.links.map(e => (
            <a
             href={e}
             rel="noopener noreferrer"
             target="_blank"
             style={{ textDecoration: `none` }}
            >
             <p style={{ margin: `1rem 1rem` }}>{e}</p>
            </a>
           ))}
          </div>
         </div>
        ))}
       </>
      ) : (
       ""
      )}
      {view == "curricula" ? (
       <>
        <h1 style={{ fontFamily: `Source Sans Pro` }}>
         Regulation & Curricula
        </h1>
        {acadData.dataUG.map(item => (
         <div className="row rowmarl3">
          <div className="digital">
           <h3>{item.title}</h3>

           {item.data.map(e => (
            <a
             href={e.link}
             target="_blank"
             rel="noopener noreferrer"
             style={{ textDecoration: `none` }}
            >
             <p
              style={{
               borderBottom: `1px dotted black`,
               paddingBottom: `0.5rem`,
               width: `fit-content`,
               margin: `0 1rem`,
              }}
             >
              {e.para}
             </p>
            </a>
           ))}
          </div>
         </div>
        ))}
        {acadData.dataPG.map(item => (
         <div className="row rowmarl3">
          <div className="digital">
           <h3>{item.title}</h3>

           {item.data.map(e => (
            <a
             href={e.link}
             target="_blank"
             rel="noopener noreferrer"
             style={{ textDecoration: `none` }}
            >
             <p
              style={{
               borderBottom: `1px dotted black`,
               paddingBottom: `0.5rem`,
               width: `fit-content`,
               margin: `0 1rem`,
              }}
             >
              {e.para}
             </p>
            </a>
           ))}
          </div>
         </div>
        ))}
        {acadData.dataPHD.map(item => (
         <div className="row rowmarl3">
          <div className="digital">
           <h3>{item.title}</h3>

           {item.data.map(e => (
            <a
             href={e.link}
             target="_blank"
             rel="noopener noreferrer"
             style={{ textDecoration: `none` }}
            >
             <p
              style={{
               borderBottom: `1px dotted black`,
               paddingBottom: `0.5rem`,
               width: `fit-content`,
               margin: `0 1rem`,
              }}
             >
              {e.para}
             </p>
            </a>
           ))}
          </div>
         </div>
        ))}
        {acadData.dataNotice.map(item => (
         <div className="row rowmarl3">
          <div className="digital">
           <h3>{item.title}</h3>

           {item.data.map(e => (
            <a
             href={e.link}
             rel="noopener noreferrer"
             target="_blank"
             style={{ textDecoration: `none` }}
            >
             <p
              style={{
               borderBottom: `1px dotted black`,
               paddingBottom: `0.5rem`,
               width: `fit-content`,
               margin: `0 1rem`,
              }}
             >
              {e.para}
             </p>
            </a>
           ))}
          </div>
         </div>
        ))}
       </>
      ) : (
       ""
      )}
      {view == "refund" ? (
       <>
        <h1 style={{ fontFamily: `Source Sans Pro` }}>Refund Policy</h1>
        {acadData.refund.map(item => (
         <div className="row rowmarl3">
          <div className="digital">
           {item.para.map(e => (
            <p>{e}</p>
           ))}
          </div>
         </div>
        ))}
       </>
      ) : (
       ""
      )}
      {view == "fee" ? (
       <>
        <h1 style={{ fontFamily: `Source Sans Pro` }}>Fee Structures</h1>
        {acadData.fee.map(item => (
         <div className="row rowmarl3">
          <div className="digital">
           <h3>{item.title}</h3>
           {item.data.map(e => (
            <>
             <a
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: `none` }}
             >
              <p
               style={{
                borderBottom: `1px dotted black`,
                paddingBottom: `0.15rem`,
                width: `fit-content`,
                margin: `0 1rem`,
               }}
              >
               {e.para}
              </p>
             </a>
            </>
           ))}
          </div>
         </div>
        ))}
       </>
      ) : (
       ""
      )}
      {view == "centreOfExcellence" && (
       <div className="layoutrow layoutrow1 rowmarl3" id="admission">
        <div>
         <div className="row">
          <h1 style={{ marginBottom: `1rem` }}>Centre Of Excellence</h1>
         </div>
         {acadData.centreOfExcellence.map(e => (
          <div className="row rowmarr3 digital">
           <div>
            <h3>
             {e.title}
             {e.link && (
              <a
               href={e.link}
               style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "#941b0c",
                textDecorationLine: "underline",
               }}
              >
               (Website Link):
              </a>
             )}
            </h3>
            {e.data.map(item => (
             <>
              <li>
               {item.para}{" "}
               {item.link && (
                <a href={item.link} style={{ color: "blue" }}>
                 <u>Link</u>
                </a>
               )}
              </li>

              {/* </a> */}
              {/* <img src={item.imageLink}></img> */}
             </>
            ))}
           </div>
          </div>
         ))}
        </div>
       </div>
      )}
      {view == "patents" ? (
       <>
        <h1 style={{ fontFamily: `Source Sans Pro` }}>Patents</h1>
        {acadData.patents.map(item => (
         <div className="row rowmarl3">
          <div className="digital">
           <h3>{item.title}</h3>
           {item.data.map(e => (
            <>
             <a
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: `none` }}
             >
              <p
               style={{
                borderBottom: `1px dotted black`,
                paddingBottom: `0.15rem`,
                width: `fit-content`,
                margin: `0 1rem`,
               }}
              >
               {e.para}
              </p>
             </a>
            </>
           ))}
          </div>
         </div>
        ))}
       </>
      ) : (
       ""
      )}
      

          </div>
        </TabPage>
    
    </>
  );
};

export default Academicspage;
