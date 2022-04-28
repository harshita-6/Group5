import React from "react"
import Layout from "../components/Layout/layout"

const About = () => {
  return (
    <Layout>
      <div style={{ backgroundImage: "/src/images/Head.jpg" }}>
        <div className="container py-5">
          <h2 className="p-2 border-bottom fw-bold text-center">About</h2>
        </div>
      </div>
    </Layout>
  )
}

export default About
