import AppFooter from "@/shared-ui/molecules/app-footer";
import Accounts from "./components/accounts";
import AriticleList from "./components/ArticlesList";
import HomeNavBar from "./components/home-navbar";
import MainSection from "./components/main-section";
import ReadingListSection from "./components/ReadingList";
import SectionTitle from "@/shared-ui/atoms/SectionTitle";

export default function Home() {
  return (
    <div>
      <div
        className="bg-[#030303] min-h-screen  bg-gradient-to-tl from-[#030303] to-primary"
        // style={{
        //   backgroundImage: `url(/home-bg.webp)`,
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      >
        <HomeNavBar />
        <Accounts />
        <MainSection />
        <div className="grid pt-8 grid-cols-12 gap-x-4">
          <div className="md:col-span-1"></div>
          <div className="col-span-12 md:col-span-7">
            {/* <div>
              <SectionTitle
                title={"Featured Writeups"}
                showViewAll={true}
                count={13}
              />
              <AriticleList />
              <AriticleList />
            </div> */}
            <div className="">
              <SectionTitle
                title={"Featured Projects"}
                showViewAll={true}
                count={8}
              />
              <AriticleList />
            </div>
          </div>
          <div className="md:col-span-4 col-span-12">
            <ReadingListSection />
          </div>
        </div>

        {/* <div className="grid pt-8 grid-cols-12">
          <div className="col-span-1"></div>
          <div className="col-span-11">
            <SectionTitle title={"My Watch List"} showViewAll={false} />
          </div>
        </div> */}
        <div className="py-4 md:py-12"></div>
        <AppFooter />
      </div>
    </div>
  );
}
