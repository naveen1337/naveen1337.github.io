import dayjs from "dayjs";

interface PropTypes {
  id: string;
  title: string;
  date: string;
  description: string;
  readMoreLink: string | null;
  projectLink: string | null;
}
export default function AriticleList(props: PropTypes) {
  return (
    <div className="pb-3 border-b border-b-primary md:border-l-4 my-3 border-l-secondary border-gray-700">
      <div className="pl-2 md:pl-4">
        <p className="md:pb-2 text-white text-base md:text-xl font-medium">
          {props.title}
        </p>
        <div className="flex md:pb-2 flex-row items-center space-x-3">
          <p className="text-gray-200 text-xs md:text-sm">{dayjs(props.date).format("MMMM YYYY")}</p>
          {/* <p className="text-gray-200 text-xs md:text-sm">25 min read</p> */}
        </div>
        <div className="py-2">
          <p className="text-white text-sm md:text-base line-clamp-3">
            {props.description}
          </p>
        </div>
        {
          props.readMoreLink ? (
            <p className="text-white text-sm underline">Read more</p>
          ) : null
        }
        {
          
          props.projectLink ? (
            <p className="text-white text-sm underline">View on Github</p>
          ) : null
        }
        
      </div>
    </div>
  );
}