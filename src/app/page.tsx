import React from "react";

import PromoSection from "@/components/HomeComponents/PromoSection";
import WeHaveSection from "@/components/HomeComponents/WeHaveSection";
import WeMakeSection from "@/components/HomeComponents/WeMakeSection";

export default function Home() {
  return (
      <main>
         <PromoSection/>
          <WeHaveSection/>
          <WeMakeSection/>
      </main>
    )
}
