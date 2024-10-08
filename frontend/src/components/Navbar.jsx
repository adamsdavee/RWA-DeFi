"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
	const [navbar, setNavbar] = useState(false);
	return (
		<div>
			<nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
				<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block">
							{/* LOGO */}
							<Link href="/">
								<h2 className="text-2xl text-primary font-bold ">
									LOGO
								</h2>
							</Link>
							{/* HAMBURGER BUTTON FOR MOBILE */}
							<div className="md:hidden">
								<button
									className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<Image
											src="/close.svg"
											width={30}
											height={30}
											alt="logo"
										/>
									) : (
										<Image
											src="/hamburger-menu.svg"
											width={30}
											height={30}
											alt="logo"
											className="focus:border-none active:border-none"
										/>
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? "p-12 md:p-0 block" : "hidden"
							}`}
						>
							<ul className="h-screen md:h-auto items-center justify-center md:flex ">
								<li className="py-6 text-md font-medium text-black py- md:px-6 text-center border-b-2 md:border-b-0  hover:bg-primary  border-primary  md:hover:text-primary md:hover:bg-transparent">
									<Link
										href="#about"
										onClick={() => setNavbar(!navbar)}
									>
										About
									</Link>
								</li>
								<li className="py-6 text-md font-medium text-black py- px-6 text-center  border-b-2 md:border-b-0  hover:bg-primary  border-primary  md:hover:text-primary md:hover:bg-transparent">
									<Link
										href="#blog"
										onClick={() => setNavbar(!navbar)}
									>
										Blogs
									</Link>
								</li>
								<li>
									<Link
										href="/app"
										onClick={() => setNavbar(!navbar)}
										className="py-3 my-3 text-md font-medium text-white py- px-6 text-center border-b-2 md:border-b-0 bg-primary rounded-3xl hover:bg-primary border-primary  duration-200 md:hover:rounded-xl"
									>
										Launch App
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
