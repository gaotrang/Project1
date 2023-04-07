import React from "react"
import Layout from "./../../layout"
import Header from "./Header";
import SectionHero from "./SectionHero";
import SectionProducts from "./SectionProducts";
import SectionContact from "./SectionContact";
import Footer from "./Footer";

const LandingX = () => {

    return (
        <Layout>

            <Header />

            <SectionHero />

            <SectionProducts />

            <SectionContact />

            <Footer />

        </Layout>
    )

}
export default LandingX;