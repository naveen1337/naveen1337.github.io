import Accounts from "./components/accounts";
import HomeNavBar from "./components/home-navbar";
import MainSection from "./components/main-section";
import ShortIntro from "./components/short-intro";

export default function Home() {
  return (
    <div>
      <div
        className={ss.bgImage}
        style={{
          backgroundImage: `url(/home-bg.webp)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <HomeNavBar/>
        <Accounts/>
        <MainSection/>
        <ShortIntro />
      </div>
      {/* <ProjectsSection /> */}
      {/* <AppFooter /> */}
    </div>
  );
}

const ss = {
  bgImage: "bg-[#030303] min-h-screen  bg-gradient-to-tl from-[#030303] to-primary",
};