import MySQLIcon from "../../../assets/icons/mysql-icon";
import Nodeicon from "../../../assets/icons/node-icon";
import ReactIcon from "../../../assets/icons/react-icon";
import RedHatIcon from "../../../assets/icons/red-hat-icon";

export default function ShortIntro(props: any) {
  return (
    <div className="relative bottom-[80px] grid grid-cols-12 gap-4">
      <div className="col-span-6 px-20">
        <div className="inline-block">
          <p className="text-[28px] tracking-widest inline-block  pt-2 text-white">
            About Me
          </p>
          <div className="bg-gradient-to-r from-secondary  to-primary rounded h-1 ease-linear "></div>
        </div>

        <p className="text-xl py-4 font-med text-white">
          Under Graduate Computer Science Engineer
        </p>
        <p className="text-lg pb-4 text-white">
          Expertise in Full Stack web developement, React Native and Linux
          System Administration
        </p>

        <p className="text-lg text-white">
          Currently working as a React.js Developer at sabbatech
        </p>
      </div>

      <div className="col-span-6 flex items-center justify-around">
        <Nodeicon />
        <MySQLIcon />
        <ReactIcon />
      </div>
    </div>
  );
}
