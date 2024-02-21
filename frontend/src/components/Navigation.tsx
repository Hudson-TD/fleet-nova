import NavigationLink from "./shared/NavigationLink"

export default function Navigation() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <a
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-transparent p-4 md:h-40"
        href="/"
      >
        <div className="flex flex-col justify-center items-center w-32 text-white md:w-40">
          <img src="/nova.svg" className="w-[110px] h-[110px] invert"/>
          <h1 className="font-bold text-2xl">NovaFleet</h1>
          <div className="h-[1px] w-full bg-white mt-2 border border-white/50 rounded-full"/>
        </div>
      </a>
      <div className="flex grow flex-row justify-between items-center space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
        <NavigationLink />
        </div>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
      </div>
    </div>
  );
}
