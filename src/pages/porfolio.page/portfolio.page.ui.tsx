import NavBar from "../../shared/components/nav-bar";
import img from "../../assets/img/bg.jpg";
import TopSpaceSection from "./components/top-space-section";
import MainSection from "./components/main-section";

export default function PortFolioPageUI(props: any) {
  return (
    <div
      className={ss.bg}
      style={{
        backgroundImage: "url(./src/assets/img/bg.jpg)",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavBar />
      <TopSpaceSection />
      <MainSection />
    </div>
  );
}

const ss = {
  bg: "bg-[#030303] min-h-screen  bg-gradient-to-tl from-[#030303] to-primary",
};
