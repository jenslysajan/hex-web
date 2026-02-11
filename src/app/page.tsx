import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

const AppShowcase = dynamic(
  () => import("@/components/sections/AppShowcase")
);
const Story = dynamic(() => import("@/components/sections/Story"));
const WhatsComingSection = dynamic(
  () => import("@/components/sections/WhatsComingSection")
);
const BuySection = dynamic(() => import("@/components/sections/BuySection"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AppShowcase />
        <Story />
        <WhatsComingSection />
        <BuySection />
      </main>
      <Footer />
    </>
  );
}
