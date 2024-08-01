import React from "react"
import "./CheStyle.css"



export const routeName = "chet"
export const title = "Chemical Engineering and Technology"


export const about = () => {
 return (
  <>
   <br></br>
   The Department of Chemical Engineering at the National Institute of Technology Patna was established in 2024 with the vision to become a leader in Chemical Engineering education and research. Our engineering programs will provide a robust foundation in chemical engineering principles, combining traditional courses with emerging specializations. Students delve into core subjects such as material and energy balance, thermodynamics, mass transfer, heat transfer, fluid mechanics, chemical reaction engineering, process control, petroleum and polymer processing, and computational systems. We are dedicated to fostering an environment of innovative research and development.<br></br>
The department continuously expands its research facilities to support projects in diverse areas such as Catalysis & reaction engineering, Fuel cells, Advanced materials characterization, Chemical products processing, Modeling & Simulation, Chemical & Photo reactors, Biological systems engineering, Food processing technology, Clean & green technology, Nanomaterials, and Electrochemical energy conversion. Recognizing the importance of collaboration, we aim to actively engage with industry leaders, research institutions, and elite academic organizations like IITs and NITs. Through different lecture series, seminars, workshops, and conferences, we ensure that our students and faculty stay at the forefront of industry trends and innovations. These collaborations provide students with valuable networking opportunities and exposure to real-world applications of their studies.<br></br>
Our commitment is to contribute to sustainable development and improve the quality of life through excellence in teaching, research, and innovation. We strive to create an academic atmosphere that encourages creativity, critical thinking, and a multidisciplinary approach to solving global challenges. Our objective is to provide our students with professional skills, such as communication, in addition to solid foundations.<br></br>
Join us at the Department of Chemical Engineering at the National Institute of Technology Patna and become part of a dynamic community dedicated to shaping the future of chemical engineering and making a meaningful impact on society

  </>
 )
}
export const mission = () => {
 return (
  <>
   <ul>
    <li>
    Provide rigorous, comprehensive education that prepares students for leadership roles in the chemical engineering profession and allied fields.</li>
<li>Foster a research environment that promotes innovative and impactful research, contributing to the advancement of chemical engineering knowledge and technology.</li>
<li>Lead initiatives that promote sustainable development, improving quality of life, and addressing global challenges through education, research, and community engagement.</li>
<li>Build strong collaborations with alumni, industry, research organizations, and academic institutions at both national and international levels to enhance educational and research outcomes.</li>
<li>Cultivate professional and ethical leadership among students and faculty, emphasizing the importance of integrity, responsibility, and lifelong learning in their careers.</li>
<li>Encourage a multidisciplinary approach to problem-solving, integrating knowledge from various fields to address society's and industry's evolving needs.
    </li>
    
   </ul>
  </>
 )
}

export const vision = () => {
 return (
  <>
   <ul>
    <li>
    To become a globally recognized Chemical Engineering and Technology Department renowned for excellence in education, research, and innovation, driving sustainable development and addressing the complex challenges of the future.
    </li>
   </ul>
  </>
 )
}

export const contact = () => {
 return (
  <div className="img-11">
   <div>
   Department of Chemical Engineering and Technology,

    <br />
    <br />
    National Institute Of Technology Patna, Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    Email: head.cet@nitp.ac.in
    <br/>
    <br/>
    Extn: +91-612-2371-541
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1JDx-0LS5pxsMcYpcyAFBbq3If3Kfubcg"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Dr. Subrata Das</strong>

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
   
  </>
 )
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
  relPath: "/chet/faculty",
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
