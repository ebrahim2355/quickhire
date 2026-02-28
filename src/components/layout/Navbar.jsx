"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    function closeMobileMenu() {
        setIsMobileMenuOpen(false);
    }

    function handleAuthClick(label) {
        toast(`${label} is coming soon`);
        closeMobileMenu();
    }

    return (
        <header className="bg-[#F8F8FD] ">
            <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8 md:pt-6">
                <div className="flex items-center gap-7 md:gap-10">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="QuickHire logo"
                            width={200}
                            height={200}
                            priority
                            className="w-auto"
                        />
                        <span className="font-bold ml-2 text-xl">Quickhire</span>
                    </Link>
                    <nav className="hidden items-center gap-5 text-sm text-[#4d5a73] md:flex">
                        <Link href="/jobs" className="hover:text-sky-500">Find Jobs</Link>
                        <Link href="/admin/jobs" className="hover:text-sky-500">Admin</Link>
                    </nav>
                </div>

                <div className="hidden items-center gap-1.5 font-semibold md:flex md:gap-2">
                    <button
                        type="button"
                        onClick={() => handleAuthClick("Login")}
                        className="rounded-md px-2.5 py-1.5 text-[#3157ff] hover:text-amber-600 cursor-pointer md:px-3 md:py-2"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => handleAuthClick("Sign Up")}
                        className="rounded-md bg-[#3157ff] px-2.5 py-1.5 text-white md:px-3 md:py-2 hover:bg-blue-500 cursor-pointer"
                    >
                        Sign Up
                    </button>
                </div>

                <button
                    type="button"
                    aria-label="Toggle mobile menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d5dff5] text-[#3157ff] md:hidden cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    <span className="text-xl leading-none">{isMobileMenuOpen ? "x" : "="}</span>
                </button>
            </div>

            {isMobileMenuOpen ? (
                <nav className="mx-4 mb-4 rounded-xl border border-[#dbe3f5] bg-white p-3 shadow-[0_8px_24px_rgba(34,56,112,0.10)] md:hidden">
                    <ul className="grid gap-2 text-sm font-semibold text-[#4d5a73]">
                        <li>
                            <Link
                                href="/jobs"
                                onClick={closeMobileMenu}
                                className="block rounded-md px-3 py-2 hover:bg-[#f3f6ff] hover:text-[#3157ff]"
                            >
                                Find Jobs
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/jobs"
                                onClick={closeMobileMenu}
                                className="block rounded-md px-3 py-2 hover:bg-[#f3f6ff] hover:text-[#3157ff]"
                            >
                                Admin
                            </Link>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => handleAuthClick("Login")}
                                className="block w-full rounded-md px-3 py-2 text-left hover:bg-[#f3f6ff] hover:text-[#3157ff] cursor-pointer"
                            >
                                Login
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => handleAuthClick("Sign Up")}
                                className="block w-full rounded-md px-3 py-2 text-left hover:bg-[#f3f6ff] hover:text-[#3157ff] cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </header>
    );
}
