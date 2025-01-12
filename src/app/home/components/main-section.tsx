import Link from "next/link";

export default function MainSection() {
    return (
      <div>
        <div className="grid grid-cols-12">
          <div className={ss.fspace}></div>
          <div className={ss.sspace}>
            <p className={ss.name}>Naveen</p>
            <p className={ss.info}>Full Stack Developer & React Native</p>
          </div>
        </div>
        <Link target="_blank" href="#">
          <div className={ss.btn}>
            <p className={ss.btntxt}>Contact</p>
          </div>
        </Link>
      </div>
    );
  }
  
  const ss = {
    fspace: "col-span-1 border-r border-gray-600",
    sspace:
      "col-span-11 pt-28 md:pt-6 pb-28 bg-gradient-to-r from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.8)]   to-[rgba(0,0,0,0.2)] border-gray-600",
    name: "font-med py-0 my-0 px-2 text-white text-[56px] md:text-[80px] leading-[4rem] md:leading-[6rem]",
    info: "text-white p-2 text-[18px] md:text-[20px]",
    btn: "py-4 md:py-6 relative bottom-28 md:bottom-32 bg-gradient-to-r my-4 md:my-6  z-10 from-secondary via-primary w-full md:w-[480px] to-[rgba(0,0,0,0.0)]",
    btntxt: "text-center relative text-base tracking-[6px] uppercase text-white",
  };