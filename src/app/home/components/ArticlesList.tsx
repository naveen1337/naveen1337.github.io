export default function AriticleList() {
  return (
    <div className="pb-3 border-b md:border-l-4 my-2 border-l-primary border-gray-700">
      <div className="pl-2 md:pl-4">
        <p className="md:pb-2 text-white text-base md:text-xl font-medium">
          SQLite as a File system
        </p>
        <div className="flex md:pb-2 flex-row items-center space-x-3">
          <p className="text-gray-200 text-xs md:text-sm">March 28 2025</p>
          <p className="text-gray-200 text-xs md:text-sm">25 min read</p>
        </div>
        <div className="py-2">

        <p className="text-white text-sm md:text-base line-clamp-3">
          SQLite can function as a lightweight file system, storing structured
          data in a single file. It manages records, metadata, and transactions
          efficiently, offering portability, simplicity, and reliable data
          integrity across platforms.
        </p>
        </div>
        <p className="text-white text-sm underline">Read more</p>
      </div>
    </div>
  );
}
