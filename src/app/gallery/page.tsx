
import Breadcrumb from "@/components/Common/Breadcrumb";
import Gallery from "@/components/Gallery";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yatra Dance Productions",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const GalleryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Gallery"
        description="Check out our latest productions and performances. Explore the artistry and dedication of Yatra Dance Productions."
      />

      <Gallery />
    </>
  );
};

export default GalleryPage;
