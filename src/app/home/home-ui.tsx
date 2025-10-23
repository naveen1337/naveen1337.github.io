import AppFooter from "@/shared-ui/molecules/app-footer";
import Accounts from "./components/accounts";
import AriticleList from "./components/ArticlesList";
import HomeNavBar from "./components/home-navbar";
import MainSection from "./components/main-section";

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
          <div className="col-span-1"></div>
          <div className="col-span-7">
            <div className="flex flex-row item-center pt-3 pb-4 justify-between">
              <h1 className="text-white text-4xl font-medium">
                Featured Writeups
              </h1>
              <p className="text-white text-lg font-medium underline">
                View all (345 Articles)
              </p>
            </div>

            <AriticleList />
            <AriticleList />
            <AriticleList />
          </div>
          <div className="col-span-4">
            <h1 className="text-white pt-3 pb-4 text-xl font-medium">My Reading List</h1>
          </div>
        </div>

        <div className="grid pt-8 grid-cols-12 mb-8">
          <div className="col-span-1"></div>
          <div className="col-span-7 px-2">
            <div className="flex flex-row item-end py-3 justify-between">
              <h1 className="text-white text-4xl font-medium">
                Featured Projects
              </h1>
              <p className="text-white text-lg font-medium py-3 underline">
                View all(24 projects)
              </p>
            </div>

            <AriticleList />
            <AriticleList />
            <AriticleList />
          </div>
          <div className="col-span-3"></div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
}
