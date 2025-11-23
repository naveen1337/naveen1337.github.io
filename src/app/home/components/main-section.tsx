import Link from "next/link";

export default function MainSection() {
  return (
    <div>
      <div className="grid grid-cols-12 relative">
        <div className="col-span-1 border-r border-gray-600"></div>
        <div className="col-span-11 pt-6 pb-20 md:pb-28 bg-gradient-to-r from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.8)]   to-[rgba(0,0,0,0.2)] border-gray-600">
          <p className="font-primary font-bold py-0 my-0 px-2 text-white text-[56px] md:text-[80px] leading-[4rem] md:leading-[6rem]">
            Hi, I'm Naveen !
          </p>
          <p className=" p-2 text-white text-[18px] md:text-[20px] md:w-3/4">
            Full-stack web developer with 5 years of experience crafting
            scalable solutions, using Node.js, Python,
            React, and PostgreSQL Technologies
          </p>
          <p className="hidden md:block p-2 text-white text-[18px] md:text-[20px] md:w-3/4">Driven by a passion for transforming
            real-world challenges into effective, practical solutions that
            simplify and streamline complex business operations</p>
        </div>
        <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeS7MFBjY0Fxv28MPLpNSXuYg1MC0U6AKGN3wKhfBkNzEnVzQ/viewform?usp=dialog">
        <div className="py-4 md:py-6 absolute bottom-0 bg-gradient-to-r my-4 md:my-6  z-10 from-secondary via-primary w-full md:w-[480px] to-[rgba(0,0,0,0.0)]">
          <p className="text-center relative text-base tracking-[6px] uppercase text-white">
            Contact
          </p>
        </div>
      </Link>
      </div>
      
    </div>
  );
}