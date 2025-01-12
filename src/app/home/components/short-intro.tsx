// import MySQLIcon from "../../../assets/icons/mysql-icon";
// import Nodeicon from "../../../assets/icons/node-icon";
// import ReactIcon from "../../../assets/icons/react-icon";
// import RedHatIcon from "../../../assets/icons/red-hat-icon";

export default function ShortIntro(props: any) {
  return (
    <div className="relative bottom-[80px] grid grid-cols-12 gap-4 bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.2)] md:py-4">
      <div className="col-span-12 md:col-span-6 px-6 md:px-20">
        <div className="inline-block">
          <p className="text-[22px] md:text-[22px] tracking-wider inline-block  pt-2 text-white">About Me</p>
          <div className="bg-gradient-to-r from-secondary to-primary h-1 ease-linear"></div>
        </div>

        <p className="text[20px] md:text-lg py-4 font-med text-white">Under Graduate Computer Science Engineer</p>
        <p className="text[20px] md:text-base pb-4 text-white">
          Expertise in Full Stack web developement,Linux System Administration, React, Node.js, Postgres,React Native and Python
        </p>

        <p className="text[20px] md:text-base text-white">
          Currently working as a Full stack Developer at <a target="_blank"  className="underline" href="https://www.verizon.com/">Verizon Data Service @Chennai India</a>
        </p>
      </div>

      <div className="col-span-12 md:col-span-6 flex items-center justify-around">
        {/* <Nodeicon />
        <MySQLIcon />
        <ReactIcon /> */}
      </div>
    </div>
  );
}