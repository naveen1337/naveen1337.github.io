import NavBar from "../../shared/components/nav-bar";
import img from "../../assets/img/bg.jpg";
import TopSpaceSection from "./components/top-space-section";
import MainSection from "./components/main-section";
import ShortIntro from "./components/short-intro";
import ProjectsSection from "./components/projects-section";
import AppFooter from "./components/footer";

export default function PortFolioPageUI(props: any) {
  return (
    <div className={ss.bg}>
      <div
        className={ss.bg}
        style={{
          backgroundImage: "url(./src/assets/img/bg.webp)",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <NavBar />
        <TopSpaceSection />
        <MainSection />
        <ShortIntro />
      </div>
      <ProjectsSection />
      <AppFooter />
    </div>
  );
}

const ss = {
  bg: "bg-[#030303] min-h-screen  bg-gradient-to-tl from-[#030303] to-primary",
};
