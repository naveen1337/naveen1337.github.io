import { Link } from "react-router-dom";
import SignatreIcon from "../../assets/icons/signature-icon";

export default function NavBar(props: any) {
  return (
    <div className={ss.root} style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
      <div className={ss.block1}>
        <div>
          <SignatreIcon />
        </div>
      </div>

      <div className={ss.block2}>
        <div className={ss.linkC}>
          <Link to={"/#projects"} className={ss.link}>
            Projects
          </Link>
        </div>

        <div className={ss.linkC}>
          <a
            className={ss.link}
            target="_blank"
            href="mailto:naveem1337@outlook.com"
          >
            Contact
          </a>
        </div>

        <div className={ss.linkC}>
          <a className={ss.link} href="#">
            Blog
          </a>
        </div>
      </div>
      <div
        onClick={() => {
          navigator.share({
            url:"https://naveen1337.github.io"
          })
        }}
        className={ss.block3}
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg> */}
      </div>
    </div>
  );
}

const ss = {
  root: "border-b grid grid-cols-12 border-gray-600",
  block1:
    "col-span-12 md:col-span-1 border-r border-gray-600 pt-2 md:pt-4 flex md:justify-center",
  link: "font-semibold tracking-widest uppercase text-gray-200 ",
  block2: "col-span-10 hidden md:flex justify-center space-x-16",
  block3:
    "col-span-1 cursor-pointer border-l border-gray-600 hidden md:flex items-center justify-center",
  linkC:
    "border-b-4 hover:bg-[#5922F766] transition ease-in md:p-4 border-primary cursor-pointer",
};
