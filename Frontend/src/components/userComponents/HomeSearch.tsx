import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Seperator from "../Seperator";

const HomeSearch = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col mt-2">
        <p className="text-sm text-brand-orange text-center animate-pulse">
          scroll down
        </p>
        <img
          src="/src/assets/down-arrow.svg"
          alt="scroll down"
          className="w-5 h-5 sm:w-14 sm:h-14 animate-bounce"
        />
      </div>
      <div className="text-center mb-4">
        <p className="font-normal sm:text-xl text-sm tracking-wide">
          Thousands are fundraising online on Lifeboat
        </p>
      </div>
      {/* seperator line */}
      <Seperator />
      {/* search input field */}
      <div className="flex justify-center w-full mt-8 mb-8">
        <form action="" className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search by fundraiser name, title, location, cause or other keywords"
            className="w-2/3 p-1 md:w-1/3 md:p-2 rounded-l-lg border-2 border-brand-darkGreen focus:border-blue-300 outline-0"
          />
          <button
            type="submit"
            className="p-2 bg-brand-darkGreen text-white rounded-r-lg!"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </>
  );
};

export default HomeSearch;
