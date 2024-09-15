"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHouse, FaRotate, FaStackExchange, FaStore } from "react-icons/fa6";

const layout = ({ children }) => {
	const pathname = usePathname();

	return (
		<div className="flex flex-row bg-slate-100">
			{/* sidebar */}

      {/* Styling for fixed sidebar */}
      <div className="min-h-screen w-[310px] m-5 -z-10"></div>

			<nav className="text-gray-800 w-[290px] border-r-2 border-gray-200 p-5 min-h-screen h-full fixed">
				<div className="text-2xl text-primary my-3 mb-14 font-extrabold">
					Logo
				</div>

				<div className="flex flex-col gap-3 font-semibold">
					<Link
						href="/dashboard/assets"
						className={
							pathname === "/dashboard/assets"
								? "bg-green-500 flex flex-row gap-2 items-center p-2 rounded-xl text-white"
								: "flex flex-row gap-2 items-center p-2 rounded-xl hover:text-primary"
						}
					>
						<FaHouse /> Real Estate Assets
					</Link>
					<Link
						href="/dashboard/portfolio"
						className={
							pathname === "/dashboard/portfolio"
								? "bg-green-500 flex flex-row gap-2 items-center p-2 rounded-xl text-white"
								: "flex flex-row gap-2 items-center p-2 rounded-xl hover:text-primary"
						}
					>
						<FaStore /> Portfolio
					</Link>
					<Link
						href="/dashboard/swap"
						className={
							pathname === "/dashboard/swap"
								? "bg-green-500 flex flex-row gap-2 items-center p-2 rounded-xl text-white"
								: "flex flex-row gap-2 items-center p-2 rounded-xl hover:text-primary"
						}
					>
						<FaRotate /> Swap
					</Link>
					{/* <Link
						href="/dashboard/assets"
						className={
							pathname === "/dashboard/assets"
								? "bg-green-500 flex flex-row gap-2 items-center p-2 rounded-xl text-white"
								: "flex flex-row gap-2 items-center p-2 rounded-xl hover:text-primary"
						}
					>
						<FaHouse /> Real Estate Assets
					</Link>
					<Link
						href="/dashboard/assets"
						className={
							pathname === "/dashboard/assets"
								? "bg-green-500 flex flex-row gap-2 items-center p-2 rounded-xl text-white"
								: "flex flex-row gap-2 items-center p-2 rounded-xl hover:text-primary"
						}
					>
						<FaHouse /> Real Estate Assets
					</Link> */}
				</div>
			</nav>

			<div className="w-full">{children}</div>
		</div>
	);
};

export default layout;
