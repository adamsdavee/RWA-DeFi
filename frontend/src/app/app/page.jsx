import React from "react";

const page = () => {
	return (
		<div>
			{/* hero section */}
			<section className="flex flex-col items-center justify-center h-screen md:p-10 p-5 relative bg-slate-100">
				<div className="rounded-2xl bg-slate-100 px-4 py-2 w-fit shadow-sm">
					The Future of Investment
				</div>
				<h1 className="md:text-6xl text-5xl font-bold p-3 text-center">
					RWA Token is Now Live
				</h1>
				<p>
					The Landshare RWA Token Main Sale is now live! Our new
					tokenziation model offers a simple and secure way to gain
					exposure to real estate directly on-chain.
				</p>
				<div className="py-5">
					<button className="py-3 mr-3 bg-primary hover:opacity-80 text-white px-5 rounded-2xl border border-white">
						Buy Now
					</button>
					<button className="border border-primary py-3 px-5 text-black inline-flex flex-row items-center gap-2 rounded-2xl hover:bg-primary">
						Learn More
					</button>
				</div>
			</section>

			{/* Rankings */}
			<div className="bg-white p-7 rounded-2xl shadow-xl max-w-[1000px] flex md:flex-row flex-col gap-2 justify-around items-center m-5 md:m-auto relative -top-20 ">
				<div className="flex flex-row items-center justify-around flex-1 border-b-[3px] border-primary pb-5 md:pb-0 md:border-none w-full">
					<div className="flex flex-col items-center justify-between md:justify-center md:border-r-2 border-r-primary px-5 gap-2 m-auto flex-1">
						<span className="font-bold text-2xl">$5,388,000</span>
						<span className="text-gray-500 text-sm">
							Total Value Locked
						</span>
					</div>

					<div className="flex flex-col items-center justify-between md:justify-center md:border-r-2 border-r-primary px-5 gap-2 m-auto flex-1 pt-2 md:pt-0">
						<span className="font-bold text-2xl">13.45%</span>
						<span className="text-gray-500 text-sm">
							Staking APY
						</span>
					</div>
				</div>
				<div className="flex flex-row items-center justify-around flex-1 w-full pt-5 md:pt-0">
					<div className="flex flex-col items-center justify-between md:justify-center md:border-r-2 border-r-primary px-5 gap-2 m-auto flex-1">
						<span className="font-bold text-2xl">37%</span>
						<span className="text-gray-500 text-sm inline-block">
							LP Farm APR
						</span>
					</div>

					<div className="flex flex-col items-center justify-between md:justify-center px-5 gap-2 m-auto flex-1">
						<span className="font-bold text-2xl">8.86%</span>
						<span className="text-gray-500 text-sm">RWA APR</span>
					</div>
				</div>{" "}
			</div>
		</div>
	);
};

export default page;
