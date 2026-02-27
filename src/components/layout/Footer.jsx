import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1b2133]">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-8 pt-8 pb-5 text-[#e6eaf6]">
                <div className="flex flex-col md:flex-row gap-8 md:gap-0">
                    <div className="flex-1 md:pr-14">
                        <a href="#" className="inline-flex items-center">
                            <Image
                                src="/logo.png"
                                alt="QuickHire logo"
                                width={20}
                                height={20}
                                priority
                                className="w-auto"
                            />
                            <span className="font-bold ml-2 text-xl">Quickhire</span>
                        </a>
                        <p className="mt-4 max-w-xs text-xs leading-5 text-[#b1b8cc]">
                            Great platform for the job seeker that passionate about startups.
                            Find your dream job easier.
                        </p>
                    </div>

                    <div className="flex flex-2">
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-white">About</h3>
                            <ul className="mt-3 space-y-2 text-xs text-[#b1b8cc]">
                                <li>Companies</li>
                                <li>Pricing</li>
                                <li>Terms</li>
                                <li>Advice</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-white">Resources</h3>
                            <ul className="mt-3 space-y-2 text-xs text-[#b1b8cc]">
                                <li>Help Docs</li>
                                <li>Guide</li>
                                <li>Updates</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-white">Get job notifications</h3>
                        <p className="mt-3 max-w-sm text-xs leading-5 text-[#b1b8cc]">
                            The latest job news, articles, sent to your inbox weekly.
                        </p>
                        <form className="mt-4 flex max-w-sm">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="h-10 w-full border border-[#2c344b] bg-white px-3 text-xs text-[#1f2a44] outline-none rounded-l"
                            />
                            <button className="h-10 bg-[#4348e8] px-4 text-xs font-semibold text-white rounded-r">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 border-t border-[#2a334b] pt-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <p className="text-xs text-[#8e97b1]">
                            2021 @ QuickHire. All rights reserved.
                        </p>
                        <div className="flex items-center justify-around md:w-1/3">
                            {["f", "i", "x", "in", "t"].map((social) => (
                                <span
                                    key={social}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2b3247] text-xl text-[#c3cae1]"
                                >
                                    {social}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
