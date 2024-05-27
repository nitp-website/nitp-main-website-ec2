import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Facultypage from "../components/departments/faculty"

const OtherEmployeespage = () => (
 <Layout>
  <SEO title="Employees" />
  <Facultypage url="others" title="Employees of NIT Patna" />
 </Layout>
)

export default OtherEmployeespage
