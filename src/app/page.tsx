import React from "react";

import PromoSection from "@/components/HomeComponents/PromoSection";
import WeHaveSection from "@/components/HomeComponents/WeHaveSection";
import WeMakeSection from "@/components/HomeComponents/WeMakeSection";
import OurProductsSection from "@/components/HomeComponents/OurProductsSection";

export default function Home() {
  return (
      <main>
         <PromoSection/>
          <WeHaveSection/>
          <WeMakeSection/>
          <OurProductsSection/>
      </main>
    )
}
