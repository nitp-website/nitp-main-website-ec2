export const routeName = "ce"
export const title = "Civil Engineering"
import { Labs, Activities } from "./civil-others-data"
import React from "react"

export const titleDescription = () => {
 return (
  <>
   <div className="row rowmarl3">
    <h2 data-aos="zoom-in-right">
     “The computer was born to solve problems that did not exist before.”
    </h2>
   </div>
   <div className="row rowmarl3">
    <h2 data-aos="zoom-in-right" id="aut">
     — Bill Gates
    </h2>
   </div>
  </>
 )
}
export const research = () => {
 return( <>
    <h4 style={{ paddingTop: '10px', paddingBottom: '5px' }}>Program Education Objectives (PEOs) of UG Program</h4>
    <table>
      <thead>
        <tr>
          <th>PEO Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PEO1</td>
          <td>To equip our students with high quality education, knowledge, innovation and computational skills in the area of Civil Engineering.</td>
        </tr>
        <tr>
          <td>PEO2</td>
          <td>To empower students to analyze realistic problems, to design civil structures as per IS codes which are economically feasible, and to cope with recent technological innovations.</td>
        </tr>
        <tr>
          <td>PEO3</td>
          <td>To develop professional ethics, communication skills, leadership quality, and team work capability in the students of Civil Engineering Department for their successful career at international and national level.</td>
        </tr>
      </tbody>
    </table>
  
    <h4 style={{ paddingTop: '10px', paddingBottom: '5px' }}>Program Outcomes (POs) of UG Program</h4>
    <table>
      <thead>
        <tr>
          <th>PO Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PO1</td>
          <td>Engineering knowledge: An ability to apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to get the solution of the engineering problems.</td>
        </tr>
        <tr>
          <td>PO2</td>
          <td>Problem analysis: Ability to identify, formulate, review research literature, and analyze complex engineering problems.</td>
        </tr>
        <tr>
          <td>PO3</td>
          <td>Design/development of solutions: Ability to design solutions for complex engineering problems by considering social, economic, and environmental aspects.</td>
        </tr>
        <tr>
          <td>PO4</td>
          <td>Conduct investigations of complex problems: Use research-based knowledge to design, conduct, and analyze experiments to get valid conclusions.</td>
        </tr>
        <tr>
          <td>PO5</td>
          <td>Modern tool usage: Ability to create, select, and apply appropriate techniques, and to model complex engineering activities with an understanding of the limitations.</td>
        </tr>
        <tr>
          <td>PO6</td>
          <td>The engineer and society: Ability to apply knowledge by considering social health, safety, legal, and cultural issues.</td>
        </tr>
        <tr>
          <td>PO7</td>
          <td>Environment and sustainability: Understanding of the impact of the adopted engineering solutions in social and environmental contexts.</td>
        </tr>
        <tr>
          <td>PO8</td>
          <td>Ethics: Understanding of the ethical issues of civil engineering and applying ethical principles in engineering practices.</td>
        </tr>
        <tr>
          <td>PO9</td>
          <td>Individual and teamwork: Ability to work effectively as an individual or in a team, as a member or as a leader.</td>
        </tr>
        <tr>
          <td>PO10</td>
          <td>Communication: An ability to communicate clearly and effectively through different modes of communication.</td>
        </tr>
        <tr>
          <td>PO11</td>
          <td>Project management and finance: Ability to handle projects and manage finance-related issues.</td>
        </tr>
        <tr>
          <td>PO12</td>
          <td>Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning.</td>
        </tr>
      </tbody>
    </table>
  
    <h4 style={{ paddingTop: '10px', paddingBottom: '5px' }}>Program Specific Outcomes (PSOs) of Civil Engineering UG Program</h4>
    <table>
      <thead>
        <tr>
          <th>PSO Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PSO1</td>
          <td>Analyze, design, and develop civil engineering infrastructure facilities at local and global scales with professional ethics.</td>
        </tr>
        <tr>
          <td>PSO2</td>
          <td>Provide specific solutions to challenges in water resources, water supply, and sanitation in a sustainable manner.</td>
        </tr>
        <tr>
          <td>PSO3</td>
          <td>Identify and recommend reliable and sustainable solutions for field-based problems related to soil mechanics and transportation engineering.</td>
        </tr>
      </tbody>
    </table>
  
    <h4 style={{ paddingTop: '10px', paddingBottom: '5px' }}>Program Educational Objectives (PEOs) of Structural Engineering</h4>
    <table>
      <thead>
        <tr>
          <th>PEO Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PEO1</td>
          <td>To provide quality education in the field of structural engineering to empower the students to conceive, model, analyze, design, build, and maintain or rehabilitate the structural systems to meet the technological and socio-economic needs of safe, functional, economic, and innovative infrastructure.</td>
        </tr>
        <tr>
          <td>PEO2</td>
          <td>To develop the capabilities among students to innovate, develop, and implement it for economic growth and enrichment of quality of life.</td>
        </tr>
        <tr>
          <td>PEO3</td>
          <td>To develop interest and train them to do basic quality research and undertake research projects related to experimental and analytical investigation and use of software techniques, keeping in view the day-to-day needs of the society.</td>
        </tr>
        <tr>
          <td>PEO4</td>
          <td>To impart professional ethics, communication skills, knowledge related to structural engineering field in depth and breadth so that the students are able to understand and analyze the problems in various interdisciplinary fields of civil engineering.</td>
        </tr>
        <tr>
          <td>PEO5</td>
          <td>To impart practical knowledge and to develop teamwork spirits and leadership quality to make them able to work with others.</td>
        </tr>
      </tbody>
    </table>
  
    <h4 style={{ paddingTop: '10px', paddingBottom: '5px' }}>Program Educational Objectives (PEOs) of Geotechnical Engineering</h4>
    <table>
      <thead>
        <tr>
          <th>PEO Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PEO1</td>
          <td>Engage in investigation, testing, and design in the field of construction and allied engineering works.</td>
        </tr>
        <tr>
          <td>PEO2</td>
          <td>Solve problems of social relevance by applying the knowledge of Geotechnical Engineering and/or pursue higher education and research.</td>
        </tr>
        <tr>
          <td>PEO3</td>
          <td>Work effectively as an individual or as a team member in multi-disciplinary projects.</td>
        </tr>
        <tr>
          <td>PEO4</td>
          <td>Engage in life-long learning, career enhancement, and adapt to changing professional and societal needs by providing training, exposure in soft skills for better career and holistic personality development and develop a professional attitude towards ethical issues.</td>
        </tr>
      </tbody>
    </table>
  
    <h4 style={{ paddingTop: '10px', paddingBottom: '5px' }}>Program Educational Objectives (PEOs) of Transportation Engineering</h4>
    <table>
      <thead>
        <tr>
          <th>PEO Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PEO1</td>
          <td>To develop ability in the student to acquire knowledge in engineering and apply it professionally within economic, environmental, social, political, ethical constraints ensuring health, safety, and sustainability.</td>
        </tr>
        <tr>
          <td>PEO2</td>
          <td>To develop the ability to identify, formulate, comprehend, analyze, design, and solve engineering problems with hands-on experience in various technologies using modern tools necessary for engineering practice to satisfy the needs of society and industry.</td>
        </tr>
        <tr>
          <td>PEO3</td>
          <td>To equip the students with the ability to design, simulate, experiment, analyze, optimize, and interpret in their core applications through multi-disciplinary concepts and contemporary learning and transform them into industry-ready graduates.</td>
        </tr>
        <tr>
          <td>PEO4</td>
          <td>To provide training, exposure in soft skills for better career and holistic personality development and develop professional attitude towards ethical issues, teamwork, responsibility, accountability and ingrain in them the capability to relate engineering issues to broader social perspective.</td>
        </tr>
        <tr>
          <td>PEO5</td>
          <td>To provide students with an academic environment and make them aware of excellence, develop in them the urge of continuous learning, discovery, creativity, innovation, and leadership to become a successful professional in Civil and Transportation Engineering.</td>
        </tr>
      </tbody>
    </table>
  
    <h4 style={{ paddingTop: '10px', paddingBottom: '5px' }}>Program Educational Objectives (PEOs) of Water Resources Engineering</h4>
    <table>
      <thead>
        <tr>
          <th>PEO Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PEO1</td>
          <td>This program addresses all water-related issues preferably in the eastern part of the country and provides multidisciplinary and high-quality education in the field of water resources engineering.</td>
        </tr>
        <tr>
          <td>PEO2</td>
          <td>To enable students to analyze realistic problems, problems related to stormwater drainage, flood damage mitigation, water quality in streams and aquifers, erosion, sedimentation, protection of ecosystems, and other natural resources, and equip our students in solving these problems with analytical and computational skills.</td>
        </tr>
        <tr>
          <td>PEO3</td>
          <td>To develop professional ethics, communication skills, leadership quality, and teamwork capability, and also to generate knowledge by cutting-edge research.</td>
        </tr>
      </tbody>
    </table>
  
    <h4 style={{ paddingTop: '10px', paddingBottom: '5px' }}>Program Educational Objectives (PEOs) of Environmental Engineering</h4>
    <table>
      <thead>
        <tr>
          <th>PEO Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PEO1</td>
          <td>This program addresses all pollution (Water, Air, Noise, and Solid Waste) related issues of the country and provides multidisciplinary and high-quality education in the field of Environmental Engineering.</td>
        </tr>
        <tr>
          <td>PEO2</td>
          <td>To enable students to analyze realistic problems, problems related to different pollutants, drinking water, clean air of the environment, protection of ecosystems, and other natural resources, and equip our students in solving these problems with analytical and computational skills.</td>
        </tr>
        <tr>
          <td>PEO3</td>
          <td>To develop professional ethics, communication skills, leadership quality, and teamwork capability, provide solutions to the society, and also to generate knowledge by research.</td>
        </tr>
      </tbody>
    </table>
  
    <h4 style={{ paddingTop: '10px', paddingBottom: '5px' }}>Program Outcomes (POs) of PG Programs</h4>
    <table>
      <thead>
        <tr>
          <th>PO Code</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PO1</td>
          <td>An ability to independently carry out research/investigation and development work to solve practical problems.</td>
        </tr>
        <tr>
          <td>PO2</td>
          <td>An ability to write and present a substantial technical report/document.</td>
        </tr>
        <tr>
          <td>PO3</td>
          <td>Students should be able to demonstrate a degree of mastery over the area as per the specialization of the program. The mastery should be at a level higher than the requirements in the appropriate bachelor program.</td>
        </tr>
      </tbody>
    </table>
  </>
  )
}
export const about = () => {
 return (
  <>
   The Department of Civil Engineering is the oldest and vibrant department of
   the institute, which was established along with the inception of the
   Institute in the year 1924. The Institute was formerly known as the Bihar
   College of Engineering Patna, a constituent engineering college under Patna
   University, until 27thJan 2004. It was rechristened to National Institute of
   Technology Patna on 28th Jan 2004 as an Autonomous Institute under MHRD,
   Govt. of India.
   <br />
   <br />
   The Department of Civil Engineering is committed to provide quality teaching
   and research opportunities toits undergraduate, postgraduate and doctoral
   students. Apart from UG programme, the department also offers M. Tech and
   Doctoralprogrammes in the areas of Structural Engineering, Transportation
   Engineering, Water Resource Engineering,Environmental Engineering and
   Geotechnical Engineering. The intake strength of the Civil Engineering
   Department is 92 for undergraduate (BTech)and 112forpostgraduate (MTech).
   Presently, 25 PhD scholars are enrolled with the department for pursuing
   their doctoral researchprogram.The teaching and education is directed towards
   their successful career in International and National Industries/
   Institutions, Public and Private sectors,and enable them to qualify various
   competitive examinations such as IES, IAS, GATE examinations etc.
   <br />
   <br />
   The Department is actively involved in international and national research
   projects, and high valued consultancy works for the Government, Private
   Sector and Industries.The department also offers its expertise in various
   consultancy works and research projects fordifferent industries and
   organisations in the locale. The Department supports in upbringing of society
   and other educational institutes by providing training, workshops, technology
   transfer, capacity building, and awareness programs.
   <br />
   <br />
  </>
 )
}
export const mission = () => {
 return (
  <>
   To serve by producing excellent engineers, innovators, entrepreneurs and
   academicians for the growth of the industry and the society.
   <br />
   To develop sense of competitiveness, self-confidence, sincerity, punctuality
   and ethical values among students.
   <br />
   To undertake innovative collaborative projects with industries, government
   agencies and other organisations to cater the needs of society and solve real
   field problems.
   <br />
   To develop research and teaching potential to the fullest extent.
   <br />
   To remain a role model in the field of Civil Engineering.
  </>
 )
}

export const vision = () => {
 return (
  <>
   To serve the Nation and the world, through excellence education and advanced
   research in all the streams of Civil Engineering.{" "}
  </>
 )
}

export const contact = () => {
 return (
  <div className="img-11">
   <div>
    Department of Civil Engg.,
    <br />
    National Institute Of Technology Patna,
    <br />
    Ashok Rajpath, Patna - 800005.
    <br />
    <br />
    Email: head.ce@nitp.ac.in
    <br />
    <br />
    Extn: +91-612-(2371715/2715/2371929/
    <br />
    2370419/2370843/2371930) * 126
    <br />
    <br />
   </div>

   <div className="img img-12">
    <img
     src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1aLZr0n_58Cx0lpVxSUjY6BfJbqiVduG6"
     alt="hodImage"
    />
    <br />
    <br />
    <strong>Prof. Anshuman Singh</strong>
    <br />
    Professor & HOD
   </div>
  </div>
 )
}

export const labs = () => {
 return (
  <>
   {" "}
   <div className="row rowmarl3 ">
    {Labs[0].title}
    {Labs[0].text} {Labs[0].table}{" "}
   </div>
   {Labs.slice(1).map((lab, idx) => {
    return (
     <div className="row rowmarl3" key={idx}>
      <div className="col-6" style={{ textAlign: "left", fontSize: `1.1rem` }}>
       {lab.content}
      </div>
      <div className="col-6">{lab.image}</div>
     </div>
    )
   })}
  </>
 )
}

export const activities = () => {
 return (
  <>
   {" "}
   <div className=" row rowmarl3" style={{ fontSize: `1.2rem` }}>
    {Activities.map((lab, idx) => {
     return (
      <div className="row rowmarl3" key={idx}>
       <div className="col-6">{lab.image}</div>
       <div className="col-6" style={{ textAlign: "left", fontSize: `1.1rem` }}>
        {lab.content}
       </div>
      </div>
     )
    })}
   </div>
  </>
 )
}

export const datalist = [
 {
  title: "About Us",
  data: "about",
  // img: "/department/about.svg",
 },
 {
    title: "Vision & Mission",
    data: "missionvision",
    // img: "/department/mission.svg",
   },
    
 {
    title: "PEOs and POs",
    data: "research",
    // img: "/department/mission.svg",
   },
   {
    title: "Faculty",
    relPath: "/ce/faculty",
    // img: "/department/faculty.svg",
   },
 {
  title: "Syllabus",
  relPath: "/ce/syllabus",
  // img: "/department/syllabus.svg",
 },
 
 {
  title: "Labs",
  data: "labs",
  // img: "/department/labs.svg",
 },
 
 
 
 {
  title: "Activities",
  data: "activities",
  // img: "/department/activities.svg",
 },
 {
  title: "Contact & HOD",
  data: "contact",
  // img: "/department/contact.svg",
 },

]
