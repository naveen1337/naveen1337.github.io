interface PropTypes {
  title: string;
  content: string;
  list: string[];
}

export default function ProjectCard(props: PropTypes) {
  return (
    <div className="flex flex-col justify-between h-full">
      <p className="text-white text-2xl pb-3 font-reg">{props.title}</p>
      <p className="text-base py-4 text-white">{props.content}</p>
      <div className="flex items-center space-x-3 flex-wrap">
        {props.list.map((item: any) => {
          return (
            <div key={item} className="tetx-base text-white p-1 tracking-wider">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
