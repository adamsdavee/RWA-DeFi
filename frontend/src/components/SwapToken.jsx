"use client";

import { useState } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const SwapToken = () => {
	const [type, setType] = useState("buy");

	const setBuy = () => {
		setType("buy");
	};
	const setSell = () => {
		setType("sell");
	};

	return (
		<div className="p-4 shadow-xl rounded-2xl w-[500px] bg-white">
			<h2 className="font-bold text-2xl">Swap RWA</h2>
			<div className="font-light text-sm ">
				Trade tokens in an instant
			</div>
			<div>
				<div className="flex flex-row gap-2 w-full my-3 mt-5">
					<button
						onClick={setBuy}
						className={
							type === "buy"
								? "rounded-2xl bg-secondary px-3 py-2 text-white flex-1"
								: "rounded-2xl bg-slate-200 px-3 py-2 text-black flex-1"
						}
					>
						Buy
					</button>
					<button
						onClick={setSell}
						className={
							type === "sell"
								? "rounded-2xl bg-secondary px-3 py-2 text-white flex-1"
								: "rounded-2xl bg-slate-200 px-3 py-2 text-black flex-1"
						}
					>
						Sell
					</button>
				</div>
				{/* Buy token form */}
				{type === "buy" ? (
					<form action="" className="flex flex-col gap-3">
						<div className="flex flex-col gap-1">
							<label
								htmlFor=""
								className="text-sm font-light text-gray-700"
							>
								RWA Token
							</label>
							<input
								className="p-2 rounded-xl bg-slate-100"
								type="number"
								placeholder="0 RWA"
							/>
						</div>
						<div className="flex flex-row gap-2 ">
							<div className="flex-1 flex flex-col gap-1 ">
								<label
									htmlFor=""
									className="text-sm font-semibold"
								>
									USDC
								</label>
								<input
									className="p-2 rounded-xl bg-slate-100"
									type="number"
									placeholder="0.00 USDC"
								/>
							</div>
							<div className="flex-1 flex flex-col gap-1 ">
								<label
									htmlFor=""
									className="text-sm font-semibold"
								>
									LAND
								</label>
								<input
									className="p-2 rounded-xl bg-slate-100"
									type="number"
									placeholder="0.00 LAND"
								/>
							</div>
						</div>
					</form>
				) : null}
				{/* Sell token form */}
				{type === "sell" ? (
					<form action="" className="flex flex-col gap-3">
						<div className="flex flex-col gap-1">
							<label
								htmlFor=""
								className="text-sm font-light text-gray-700"
							>
								RWA Token
							</label>
							<input
								className="p-2 rounded-xl bg-slate-100"
								type="number"
								placeholder="0 RWA"
							/>
						</div>

						<div className="flex flex-col my-2 gap-1">
							<label htmlFor="" className="font-semibold text-sm">
								USDC
							</label>
							<input
								className="p-2 rounded-xl bg-slate-100"
								type="number"
								placeholder="0.00 USDC"
							/>
						</div>
					</form>
				) : null}{" "}
				<div>
					<button className="bg-primary p-2 rounded-2xl hover:opacity-90 duration-300 text-white my-2 mt-4 w-full">
						Connect Wallet
					</button>
				</div>
				<div>
					<button className="flex flex-row items-center gap-2 justify-end my-3 w-full ">
						Get Token <MdArrowOutward className="text-xl"/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SwapToken;
