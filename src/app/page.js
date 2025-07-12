import Docs from "@/Component/docs";
import ApiUsageExamples from "@/Component/Home/CodeSnippet";
import FaqComponent from "@/Component/Home/FaqSection";
import ApiFeaturesSection from "@/Component/Home/FeatureSection";
import HeroSection from "@/Component/Home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <HeroSection/>
     <ApiFeaturesSection/>
     <ApiUsageExamples/>
     <FaqComponent/>
    </div>
  );
}
