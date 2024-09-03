import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RealEstateCard from "@/components/RealEstateCard";
import TokenCard from "@/components/TokenCard";
import React from "react";
import { FaDownload } from "react-icons/fa6";

const page = () => {
	return (
		<div className="bg-slate-100 pt-20">
			{/* Navbar */}
			<Navbar />

			{/* Hero */}
			<section className="flex flex-col items-center justify-center h-screen md:p-10 p-5">
				<div>Get started in a few simple steps</div>
				<h1 className="md:text-6xl text-5xl font-bold p-3 text-center">
					The new way to invest in Real Estate
				</h1>
				<p>
					Unlock the potential of tokenized real estate investment
					with Landshare's RWA ecosystem
				</p>

				<div className="py-5">
					<button className="py-3 mr-3 bg-primary hover:opacity-80 text-white px-5 rounded-2xl border border-white">
						Launch App
					</button>
					<button className="border border-primary py-3 px-5 text-black inline-flex flex-row items-center gap-2 rounded-2xl hover:bg-primary">
						<FaDownload className="text-xl" /> View Docs
					</button>
				</div>
				<RealEstateCard />
			</section>

			{/* About section */}
			<section className="flex flex-col items-center md:p-14 p-5 bg-neutral-50 ">
				<div className="max-w-[1200px]">
					<div className="rounded-2xl bg-slate-100 px-4 py-2 w-fit shadow-sm">
						The future of Investment
					</div>
					<h2 className="text-5xl font-bold py-7 text-left">
						Real Estate Meets Blockchain
					</h2>
					<div className="flex md:flex-row justify-between gap-3 w-full py-4 flex-col items-center">
						<p className="max-w-[400px] ">
							Welcome to the future of real estate investment -
							meticulously crafted for the blockchain. Earn
							passive income from real world assets and enhance
							your investment with a suite of DeFi features
						</p>
						<div>
							<button className="py-3 mr-3 bg-primary hover:opacity-80 text-white px-5 rounded-2xl border border-white">
								Get started
							</button>
							<button className="border border-primary py-3 px-5 text-black inline-flex flex-row items-center gap-2 rounded-2xl hover:bg-primary">
								Learn more
							</button>
						</div>
					</div>

					{/* About cards */}
					<div className="my-10 flex">
						<div className="flex flex-row flex-wrap gap-5 justify-center">
							<div className="bg-white rounded-2xl p-5 border border-gray-100 w-[380px]">
								<h3 className="text-2xl font-bold pb-3">
									Investment Unlocked
								</h3>
								<p className="text-gray-500">
									With a minimum investment of just over $1,
									Landshare makes real estate accessible to
									everyone. Earn passive income from multiple
									assets with a single token investment.
								</p>
							</div>
							<div className="bg-white rounded-2xl p-5 border border-gray-100 w-[380px]">
								<h3 className="text-2xl font-bold pb-3">
									On-Chain Valuation
								</h3>
								<p className="text-gray-500">
									View detailed financial information for each
									RWA, including property values, cash flows,
									and expenses, all updated on-chain with
									Chainlink using trusted valuation models.
								</p>
							</div>
							<div className="bg-white rounded-2xl p-5 border border-gray-100 w-[380px]">
								<h3 className="text-2xl font-bold pb-3">
									DeFi Compatible
								</h3>
								<p className="text-gray-500">
									Transform real estate into a seamlessly
									liquid on-chain asset. Explore the future of
									finance with features such as DEX Trading,
									NFT Staking, and instant transfers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="flex flex-col items-center md:p-14 p-5 bg-inherit">
				<div className="max-w-[1200px]">
					<div className="rounded-2xl bg-slate-100 px-4 py-2 w-fit shadow-sm">
						Our Optimized Process
					</div>
					<h2 className="text-5xl font-bold py-7 text-left">
						Real Assets, Real Returns
					</h2>
					<div className="flex md:flex-row justify-between gap-3 w-full py-4 flex-col items-center">
						<p className="max-w-[400px] ">
							Earn passive income from rental properties across
							Nigeria with Landshare's revolutionary take on
							tokenized real estate. Simply buy, hold and earn -
							we'll handle the rest.
						</p>
						<div>
							<button className="text-primary px-5">
								Learn More
							</button>
						</div>
					</div>

					{/* Features cards */}
					<div className="my-10 flex">
						<div className="flex flex-row flex-wrap gap-5 justify-center">
							<div className="bg-white rounded-2xl p-5 border border-gray-100 w-[380px]">
								<h3 className="text-2xl font-bold pb-3">
									Tokenization of properties{" "}
								</h3>
								<p className="text-gray-500">
									Real estate assets are procured and added to
									the Real-World Asset (RWA) Pool. Each RWA
									Token represents a share of the pool.
								</p>
							</div>
							<div className="bg-white rounded-2xl p-5 border border-gray-100 w-[380px]">
								<h3 className="text-2xl font-bold pb-3">
									Yield Generation
								</h3>
								<p className="text-gray-500">
									Properties are leased and professionally
									managed on your behalf, producing consistent
									cash flow while appreciating in value over
									time.
								</p>
							</div>
							<div className="bg-white rounded-2xl p-5 border border-gray-100 w-[380px]">
								<h3 className="text-2xl font-bold pb-3">
									Hold and Earn
								</h3>
								<p className="text-gray-500">
									The value of RWA Tokens increase in
									proportion to underlying appreciation and
									yield generation, offering exposure by
									simply holding.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Token overview */}
			<section className="flex flex-col items-center md:p-14 p-5 bg-neutral-50">
				<div className="max-w-[1200px]">
					<div className="rounded-2xl bg-slate-100 px-4 py-2 w-fit shadow-sm">
						Unlock your opportunity
					</div>
					<h2 className="text-5xl font-bold py-7 text-left">
						Token Overview
					</h2>

					<div className="flex flex-row gap-2">
						<TokenCard
							name={"LAND Token"}
							utility
							details={
								"LAND is the platform governance and utility token, utilized for payment, staking, DAO governance, and more."
							}
							circulating={"5.3M"}
							price={"$1.445"}
							mktCap={"7.6M"}
						/>
						<TokenCard
							name={"RWA Token"}
							details={
								"Each RWA token represents a share of our real estate assets. Buy and hold to earn passive income from cash flow properties"
							}
							circulating={"5.3M"}
							price={"$1.445"}
							mktCap={"7.6M"}
						/>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer/>
		</div>
	);
};

export default page;
