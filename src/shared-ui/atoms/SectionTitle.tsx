interface PropTypes {
  title: string;
  showViewAll: boolean;
  link?: string;
  count?: number;
}
export default function SectionTitle(props: PropTypes) {
  return (
    <div className="flex flex-row items-center px-2 md:px-0 md:pt-3 pb-4 justify-between">
      <h1 className="text-white md:text-4xl text-xl font-medium">{props.title}</h1>
      {props.showViewAll ? (
        <p className="text-white text-sm md:text-lg font-medium underline">
          View all {props.count ? `(${props.count})` : null}
        </p>
      ) : null}
    </div>
  );
}
