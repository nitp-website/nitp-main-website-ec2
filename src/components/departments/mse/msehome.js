import React from "react"
import "./MaeStyle.css"



export const routeName = "mse"
export const title = "Department of Materials Science & Engineering  "


export const about = () => {
 return (
  <>

   The Department of Materials Science and Engineering started in the year 2022. The Department has started a new Dual degree program B.Tech-M.Tech in Material Science and Engineering from the session 2022-23. There are 08 candidates enrolled in dual degree program in the session 2022-23 and 09 candidates enrolled in the session 2023-24. As of now, the department has been jointly supervised by the head of the physics, two faculties of Materials Science and Engineering department and existing faculties of the physics department. The two faculties of Material Science and Engineering department are very young and dynamic in nature and have good number of publications in different areas of Materials research. The new department is an interdisciplinary department which draws attention from all other engineering applications with basic understanding of Materials science. The different laboratories of Materials and Engineering  department mainly focuses on the study of the development of new materials and its advanced manufacturing methods and modification of its properties by suitable compositional and heat treatment methods by altering the physical and mechanical behaviour materials for its widespread application.  The department is aiming to develop its own ceramic and composite laboratories for the application of these materials in high temperature and structural areas of civil construction. Further aim is to develop materials modelling section for optimising and predicting materials deformation and rupture behaviour in the design context.   <br></br>



  </>
 )
}
export const mission = () => {
 return (
  <>
   <ul>
    <li>
    To train and educate the students about the fundamentals of materials science who can contribute to the society by sharing their knowledge and research innovations in the emerging areas of Materials Science application. 


</li>
<li>To train and educate the students in the emerging and challenging areas of materials research and development for its widespread application.</li>

<li>To create a good collaboration with National and International research organization through the students to be more competitive and productive among other institution of India.</li>

    
   </ul>
  </>
 )
}

export const vision = () => {
 return (
  <>
   <ul>
    <li>
    To provide a broad education about the theoretical and practical knowledge on emerging and existing materials and understanding its science by performing some qualitative research for the application prospective in terms of social, economical and environmental context.
    </li>
   </ul>
  </>
 )
}


export const contact = () => {
 return (
  <div className="img-11">
   <div>
   Department of Materials Science & Engineering
    <br />
    <br />
    National Institute Of Technology Patna, Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    {/* Email: head.mae@nitp.ac.in
    <br/>
    <br/>
    Extn: +91-993-4067-691 */}
   </div>

   <div className="img img-12">
    <img
     src="https://i.postimg.cc/L5PjMTWR/image.png"
     alt="hodImage"
    />
    <br />
    <br />
    <strong> Dr. Dev Kumar Mahato

</strong>

   </div>
  </div>
 )
}
export const research = () => {
 return <></>
}
export const labs = () => {
    return (
      <>
        {/* <div className="labs-container">
          
          <ul>
            <li>Flexible Manufacturing System Lab</li>
            <li>Robotics Lab</li>
            <li>CNC Lab</li>
            <li>Automation Lab</li>
          </ul>
        </div> */}
      </>
    );
  }
 



export const datalist = [
 {
  title: "About Us",
  data: "about",
  // img: "/department/about.svg",
 },
//  {
//   title: "Syllabus",
//   relPath: "/chem/syllabus",
//   // img: "/department/syllabus.svg",
//  },
 {
  title: "Faculty",
  relPath: "/mse/faculty",
  // img: "/department/faculty.svg",
 },
//  {
//   title: "Research Highlights",
//   data: "research",
//   // img: "/department/mission.svg",
//  },
 {
  title: "Notice",
  data: "happening",
  // img: "/department/activities.svg",
 },
 {
  title: "Contact & HOD",
  data: "contact",
  // img: "/department/contact.svg",
 },
//  {
//   title: "Labs",
//   data: "labs",
//   // img: "/department/labs.svg",
//  },
//  {
//   title: "Achievements",
//   data: "achievements",
//   // img: "/department/achievements.svg",
//  },
//  {
//   title: "Activities",
//   data: "activities",
//   // img: "/department/activities.svg",
//  },
//  {
//   title: "More Info",
//   data: "others",
//   // img: "/department/labs.svg",
//  },
 {
  title: "Mission & Vision",
  data: "missionvision",
  // img: "/department/mission.svg",
 },
]
