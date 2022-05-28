export default function MainSection() {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-1 border-r border-gray-600"></div>
        <div className="col-span-11 pt-12 pb-36 bg-gradient-to-r from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.8)]   to-[rgba(0,0,0,0.2)] border-gray-600">
          <p
            className="font-med py-0 my-0 px-2 text-white text-[120px]"
            style={{ lineHeight: "8rem" }}
          >
            Naveen
          </p>
          <p className="text-white p-2 text-[24px]">
            Full Stack Developer (MERN) & React Native
          </p>
        </div>
      </div>
      <div className="py-8 relative bottom-36 bg-gradient-to-r my-6  z-10 from-secondary via-primary w-[480px] to-[rgba(0,0,0,0.0)]">
        <p className="text-center relative text-base tracking-[6px] uppercase text-white">
          Contact
        </p>
      </div>
    </div>
  );
}
