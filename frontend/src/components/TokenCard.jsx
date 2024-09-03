import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";

const TokenCard = ({ price, mktCap, circulating, name, utility, details }) => {
	return (
		<div
			className={`rounded-xl p-6 md:p-10 text-white max-w-[600px] ${
				utility ? "bg-primary" : "bg-secondary"
			}`}
		>
			<div>{utility ? "UTILITY TOKEN" : "REAL ESTATE BACKED"}</div>
			<h2 className="text-4xl font-semibold py-2 pb-5">{name}</h2>
			<p>{details}</p>

			<div className="py-5">
				<button className="px-5 py-2 text-black font-semibold bg-white rounded-3xl hover:opacity-75 mr-4">
					Learn More
				</button>
				<button className="px-5 py-2 white rounded-3xl hover:bg-white hover:text-black border border-white">
					Buy Now
				</button>
			</div>

			{/* Minicards */}
			<div className="flex flex-row gap-2 justify-between py-4">
				<div className="rounded-lg bg-white backdrop-blur-xl p-5 pr-5 bg-opacity-20 flex flex-row gap-2 items-center">
					<AiOutlineDollarCircle className="text-2xl"/>
					<div className="flex flex-col gap-2 items-center">
						<span className="font-bold text-lg">{price}</span>
						<span >Price</span>
					</div>
				</div>

				<div className="rounded-lg bg-white backdrop-blur-xl p-5 pr-5 bg-opacity-20 flex flex-row gap-2 items-center ">
					<AiOutlineDollarCircle className="text-2xl"/>
					<div className="flex flex-col gap-2 items-center">
						<span className="font-bold text-lg">{mktCap}</span>
						<span>Mkt cap</span>
					</div>
				</div>

				<div className="rounded-lg bg-white backdrop-blur-xl p-5 pr-5 bg-opacity-20 flex flex-row gap-2 items-center">
					<AiOutlineDollarCircle className="text-2xl"/>
					<div className="flex flex-col gap-2 items-center">
						<span className="text-lg font-bold">{circulating}</span>
						<span>Circulating</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TokenCard;
