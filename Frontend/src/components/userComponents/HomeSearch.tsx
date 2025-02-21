import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const HomeSearch = () => {
  return (
    <>
    <div className="text-center mt-4 mb-4">
        <p className="font-normal sm:text-xl text-sm tracking-wide">Thousands are fundraising online on Lifeboat</p>
    </div>
    {/* seperator line */}
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-1/2 mx-auto"></hr>
    {/* search input field */}
    <div className='flex justify-center w-full mt-8 mb-8'>
        <form action="" className='w-full flex justify-center'>
            <input type="text" 
            placeholder='Search by fundraiser name, title, location, cause or other keywords'
            className='w-2/3 p-1 md:w-1/3 md:p-2 rounded-l-lg border-2 border-brand-darkGreen focus:border-blue-300 outline-0'
            />
            <button type="submit" className="p-2 bg-brand-darkGreen text-white rounded-r-lg!">
                <MagnifyingGlassIcon className="h-5 w-5"/>
            </button>
        </form>
    </div>
    </>
    
  )
}

export default HomeSearch
