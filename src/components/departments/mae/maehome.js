import React from "react"
import "./MaeStyle.css"



export const routeName = "mae"
export const title = "Mechatronics and Automation Engineering "


export const about = () => {
 return (
  <>
   <br></br>
   Welcome to the Department of Mechatronics and Automation Engineering at the National Institute of Technology Patna. Established in 2024, the Department of Mechatronics and Automation Engineering at NIT Patna is one of the institution's newest departments, committed to delivering a premier educational experience aimed at preparing students to be industry-ready through its four-year full-time B.Tech. program. The Mechatronics and Automation Programme is committed to prepare the graduates to synergistically integrate mechanical engineering, electronics, and intelligent computer control systems seamlessly in the design and manufacturing of industrial products and processes. The department is dedicated to preparing graduates with strong team skills to solve multi-disciplinary problems using the Mechatronics approach. Graduates of this program will have the opportunity to work in a variety of sectors, including aviation, electronics, automotive, manufacturing, oil and gas, mining, transportation, defense, robotics, and aerospace industries, as well as pursue advanced degrees. A meticulously designed curriculum aims to enhance self-reliance, soft skills, and leadership qualities, empowering our graduates to build successful careers and emerge as ethical entrepreneurs serving the nation and society. It is tailored to keep pace with rapidly changing technologies and industrial environments, considering both global and Indian contexts.<br></br>

The Department maintains strong industrial interactions and significantly contributes to the industry by providing consultancy services and undertaking sponsored research projects. The increasing number of patents and publications in leading multidisciplinary journals highlights the department's thriving research environment.<br></br>



  </>
 )
}
export const mission = () => {
 return (
  <>
   <ul>
    <li>
    To provide education that transforms young minds through rigorous teaching and thought processes to meet the needs of society and industry.</li>
<li>To collaborate with leading industry partners and other academic and research institutes worldwide to strengthen the education and research ecosystem.</li>

<li>To prepare students for lifelong learning in their careers by fostering ethical and technical capabilities pertinent to mechatronics, automation, and allied engineering fields.</li>

    
   </ul>
  </>
 )
}

export const vision = () => {
 return (
  <>
   <ul>
    <li>
    To create well-trained and skilled technocrats with a commitment to lifelong learning in the field of Mechatronics and Automation Engineering.
    </li>
   </ul>
  </>
 )
}


export const contact = () => {
 return (
  <div className="img-11">
   <div>
   Department of Mechatronics and Automation Engineering ,

    <br />
    <br />
    National Institute Of Technology Patna, Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    Email: head.mae@nitp.ac.in
    <br/>
    <br/>
    Extn: +91-993-4067-691
   </div>

   <div className="img img-12">
    <img
     src="https://i.postimg.cc/MG83CLnm/Screenshot-2024-08-04-131629.png"
     alt="hodImage"
    />
    <br />
    <br />
    <strong> Dr. Amit Kumar

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
        <div className="labs-container">
          
          <ul>
            <li>Flexible Manufacturing System Lab</li>
            <li>Robotics Lab</li>
            <li>CNC Lab</li>
            <li>Automation Lab</li>
          </ul>
        </div>
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
  relPath: "/mae/faculty",
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
 {
  title: "Labs",
  data: "labs",
  // img: "/department/labs.svg",
 },
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
