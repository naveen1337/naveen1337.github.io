import Link from "next/link";
import NameSVGArt from "./name-svg-art";

const links = [
  {
    key: "projects",
    value: "Projects",
    href: "#projects-section",
  },
  {
    key: "blog",
    value: "Blog",
    href: "https://substack.com/@naveen1337",
    target: "_blank",
  },
  {
    key: "github",
    value: "github",
    href: "https://github.com/naveen1337",
    target: "_blank",
  },
];

export default function NavBar(props: any) {
  return (
    <div
      className="border-b grid grid-cols-12 border-gray-600"
      style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
    >
      <div className="col-span-12 md:col-span-1 border-r border-gray-600 pt-2 md:pt-4 flex md:justify-center">
        <NameSVGArt />
      </div>

      <div className="col-span-10 hidden md:flex justify-center space-x-12">
        {links.map((item: any) => {
          return (
            <Link
              target={item.target}
              href={item.href}
              key={item.key}
              className="border-b-4 hover:bg-[#5922F766] transition ease-in md:p-4 border-primary cursor-pointer"
            >
              <div className="tracking-wider uppercase font-primary text-white">
                {item.value}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
