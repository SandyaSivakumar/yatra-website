
import Breadcrumb from "@/components/Common/Breadcrumb";
import Productions from "@/components/Productions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yatra Dance Productions",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const ProductionsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Productions"
        description="Original Works. Meaningful Narratives."
      />

      <Productions />
    </>
  );
};

export default ProductionsPage;
