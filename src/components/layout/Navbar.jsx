import Image from "next/image";

export default function Navbar() {
    return (
        <header className="bg-[#F8F8FD] ">
            <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-4 pt-4 md:px-8 md:pt-6">
                <div className="flex items-center gap-7 md:gap-10">
                    <a href="#" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="QuickHire logo"
                            width={200}
                            height={200}
                            priority
                            className="w-auto"
                        />
                        <span className="font-bold ml-2 text-xl">Quickhire</span>
                    </a>
                    <nav className="hidden items-center gap-5 text-sm text-[#4d5a73] md:flex">
                        <a href="#" className="hover:text-sky-500">Find Jobs</a>
                        <a href="#" className="hover:text-sky-500">Browse Companies</a>
                    </nav>
                </div>

                <div className="flex items-center gap-1.5 font-semibold md:gap-2">
                    <button className="rounded-md px-2.5 py-1.5 text-[#3157ff] hover:text-amber-600 cursor-pointer md:px-3 md:py-2">
                        Login
                    </button>
                    <button className="rounded-md bg-[#3157ff] px-2.5 py-1.5 text-white md:px-3 md:py-2 hover:bg-blue-500 cursor-pointer">
                        Sign Up
                    </button>
                </div>
            </div>

        </header>
    );
}
