import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home1/Banner";
import Blog from "@/components/sections/home1/Blog";
import Choose from "@/components/sections/home1/Choose";
import LogoCarouselSection from "@/components/sections/home1/LogoCarouselSection";
import Portfolio from "@/components/sections/home1/Portfolio";
import Process from "@/components/sections/home1/Process";
import SlideingText from "@/components/sections/home1/SlideingText";
import StackedScrollCards from "@/components/sections/home1/StackedScrollCards";
import Team from "@/components/sections/InnerSection/Team";

export default function Home_OnePage() {
    return (
        <Layout headerStyle={2} footerStyle={1}>
            <Banner/>
            <SlideingText/>
            
            <About/>
            
            <StackedScrollCards/>
            <LogoCarouselSection/>

            <Choose/>

          
            <Team/>

            <Process/>

            <Portfolio/>
            <Blog/>

        </Layout>
    );
}
