import MySQLIcon from "../../../assets/icons/mysql-icon";
import Nodeicon from "../../../assets/icons/node-icon";
import ReactIcon from "../../../assets/icons/react-icon";
import RedHatIcon from "../../../assets/icons/red-hat-icon";

export default function ShortIntro(props: any) {
  return (
    <div className={ss.root}>
      <div className={ss.block1}>
        <div className={ss.headingBlock}>
          <p className={ss.heading}>About Me</p>
          <div className={ss.border}></div>
        </div>

        <p className={ss.mainTitle}>Under Graduate Computer Science Engineer</p>
        <p className={ss.content}>
          Expertise in Full Stack web developement, React Native and Linux
          System Administration
        </p>

        <p className="text-lg text-white">
          Currently working as a React.js Developer at sabbatech
        </p>
      </div>

      <div className={ss.block2}>
        <Nodeicon />
        <MySQLIcon />
        <ReactIcon />
      </div>
    </div>
  );
}

const ss = {
  root: "relative bottom-[80px] grid grid-cols-12 gap-4 bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.2)] md:py-4",
  block1: "col-span-12 md:col-span-6 px-6 md:px-20",
  headingBlock: "inline-block",
  heading: "text-[22px] md:text-[28px] tracking-widest inline-block  pt-2 text-white",
  border: "bg-gradient-to-r from-secondary to-primary rounded h-1 ease-linear",
  mainTitle: "text[20px] md:text-xl py-4 font-med text-white",
  content: "text[20px] md:text-lg pb-4 text-white",
  block2: "col-span-12 md:col-span-6 flex items-center justify-around",
};
