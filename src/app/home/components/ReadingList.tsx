import Link from "next/link";

const data = [
  {
    name: "The Checklist Manifesto: How to Get Things Right",
    author: "Atul Gawande - 2009",
    image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1647403235i/6667514.jpg",
    url: "https://www.goodreads.com/book/show/6667514-the-checklist-manifesto",
    desc: "This Book explores how simple checklists can prevent errors and improve performance in complex fields \
    like medicine, aviation, and construction. Through real-world examples, Gawande shows that structured routines enhance \
    communication, consistency",
  },
  {
    name: "The Unthinkable: Who Survives When Disaster Strikes—and Why",
    author: "Amanda Ripley - 2008",
    image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320430266i/2706211.jpg",
    url: "https://www.goodreads.com/book/show/2706211-the-unthinkable",
    desc: "The Book examines how people respond to \
    disasters—why some freeze, others act, and a few survive. Blending science, psychology, and survivor stories, \
    explores mental patterns behind fear and decision-making, \
    showing how awareness, training works",
  },
  {
    name: "The Big Short: Inside the Doomsday Machine",
    author: "Michael Lewis - 2010",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2f/Big-short-inside-the-doomsday-machine.jpg",
    desc: "This book reveals how a few unconventional investors foresaw the 2008 financial crisis and profited from the collapse of the housing market. Through sharp storytelling, Lewis exposes Wall Street’s greed, ignorance, and complex financial instruments",
    url: "https://www.goodreads.com/book/show/26889576-the-big-short",
  },
];

export default function ReadingListSection() {
  return (
    <div className="px-3 md:px-12">
     <div className="flex flex-row items-center pb-4 md:pb-8">
        <p className="text-xl font-medium">My Reading List</p>
      </div> 
      <div className="">
        {data.map((item) => {
          return (
            <Link key={item.name} href={item.url} target="_blank">
            <div  className="grid grid-cols-12 mb-8">
              <div className="col-span-3 md:col-span-3 pb-1 md:pb-0 md:w-full ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain brightness-[0.9]"
                />
              </div>
              <div className="pl-3 col-span-9 md:col-span-9 relative flex flex-col justify-between">
                <div>
                  <p className="text-white md:pb-2 font-medium text-base md:text-lg line-clamp-2">
                    {item.name}
                  </p>
                  <p className="pb-1 md:pb-2 text-sm md:text-base">- {item.author}</p>
                </div>
                <p className="text-gray-200 text-sm leading-5 bottom-0 line-clamp-3 md:line-clamp-5">
                  {item.desc}
                </p>
              </div>
            </div>
          </Link>

          );
        })}
      </div>
    </div>
  );
}
