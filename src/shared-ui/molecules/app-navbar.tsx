import {
    MagnifyingGlassIcon,
    Bars3Icon
} from '@heroicons/react/24/solid'


const LINKS = [
    "Docs",
    "Blog",
    "Contact",
]

export default function AppNavBar() {
    return (
        <div className="px-2 bg-gray-50 sticky top-0 w-full border-b-[1px] border-gray-200  md:px-0">
            <div className="flex flex-row justify-between items-center h-[58px] md:h-[64px] container mx-auto">

                <div data-test-id='section1' className="flex flex-row">
                    <div data-testid="appLogo" className="px-2">
                        <p className="uppercase font-bold text-lg">Starter Kit</p>
                    </div>
                    <div data-test-id="appLinks" className="hidden md:flex flex-row px-6 space-x-1">
                        {
                            LINKS.map((item: string) => {
                                return (
                                    <div className="px-3" key={item}>
                                        <p className="text-gray-600 text-base">{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div id="webSection2" className="hidden md:flex flex-row items-center">
                    <div data-test-id="navAction" className="flex flex-row items-center">
                        <div className="flex flex-row px-2 py-1 rounded-md bg-gray-200">
                            <input
                                type="text" placeholder="Search documentation"
                                className="appearance-none 
                                focus:outline-none 
                                placeholder:text-base
                            bg-gray-200
                            " />
                            <p className="text-gray-600 text-sm">/ Focus</p>
                        </div>
                        <div className="mx-6">
                            <button className="bg-blue-600 text-white pl-2 pr-12 py-1 mx-2">
                                Watch
                            </button>
                            <button className="border-[1px] border-gray-300 text-gray-800 pl-2 pr-12 py-1 mx-2">
                                Help
                            </button>
                        </div>
                    </div>
                </div>

                <div id="mobile-section2" className='flex flex-row items-center md:hidden '>
                    <button className='mx-1 px-2'>
                        <MagnifyingGlassIcon className="size-5 text-gray-800" />
                    </button>
                    <button className='mx-1 px-2'>
                        <Bars3Icon className="size-5 text-gray-800" />
                    </button>
                </div>
            </div>
        </div>
    )
}
