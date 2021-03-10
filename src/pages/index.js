import React from "react"
import Particles from "react-particles-js"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/components/home.css'
import Image from '../images/desktop.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
        <div className="Home">
          <div className="Home__Hero">
            <img src={Image} className="Hero__Image" alt="Hero Image"/>
            <h2>Welcome to my Website.</h2>
            <p>Here you can see some of my projects.</p>
          </div>
          <div className="Categorias">
            <div className="Categoria Frontend" >
              <p>Frontend</p>
            </div>
            <div className="Categoria Backend">
              <p>Backend</p>
            </div>
            <div className="Categoria Fullstack">
              <p>FullStack</p>
            </div>
            <div className="Categoria DataScience">
              <p>Data Science</p>
            </div>
          </div>
        </div>
      <Particles className="Particles"/>
  </Layout>
)

export default IndexPage
