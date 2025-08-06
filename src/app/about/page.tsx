import AboutSectionEnsemble from "@/components/About/AboutSectionEnsemble";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yatra Dance Productions",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Know more about Yatra Dance Productions, the founder and ensemble of artists."
      />
      <AboutSectionOne />
      <AboutSectionThree />
      <AboutSectionEnsemble />
    </>
  );
};

export default AboutPage;
