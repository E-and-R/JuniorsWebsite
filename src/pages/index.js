import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import {Hidden} from '@material-ui/core'
import SEO from "../components/seo"
import Banner from "../components/banner"
import HomeContent from "../components/homeContent"
import Footer from "../components/footer"
import BottomNav from "../components/bottomNav"
import SideMenu from '../components/sidemenu'
const IndexPage = () => (
  <div>
      <SEO title="Home" />
      <SideMenu/>
      <Banner/>
      
      <Hidden xsDown>
        <BottomNav/>
      </Hidden>
      
      <HomeContent/>
      <Footer/>
  </div>
)

export default IndexPage
