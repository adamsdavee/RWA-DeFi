import SwapToken from "@/components/SwapToken";

const page = () => {
	return (
		<div className="pt-0 w-full h-full">
			<div className="bg-white p-2 mb-5">
				<button className="bg-primary text-white rounded-xl p-2 flex ml-auto">
					Connect Wallet
				</button>
			</div>

			<h1 className="text-3xl font-bold mb-10 text-center w-full">
				Swap anytime, anywhere...
			</h1>

			{/* Add liquidity */}
			<div className="bg-secondary text-white p-4 rounded-xl w-fit flex flex-col m-auto">
				<h2 className="font-semibold text-lg mb-5">Add Liquidity</h2>
				<div className="flex flex-row gap-3 items-center">
					<div className="mr-5">Your V2 liquidity</div>
					<div>
						<button className="bg-slate-100 text-black p-2 rounded-xl hover:opacity-80 duration-300">
							Create a pair
						</button>
					</div>
					<div>
						<button className="bg-primary rounded-xl p-2 hover:opacity-80 duration-300">
							Import Pool
						</button>
					</div>
				</div>
				<div className="h-0.5 w-full bg-slate-100 mt-1"></div>

				<div className="text-center rounded-xl border border-white p-2 mt-4 text-sm">
					No liquidity found
				</div>
			</div>

			<div className="flex m-auto w-full items-center justify-center mt-24">
				<div>
					<SwapToken />
				</div>
			</div>
		</div>
	);
};

export default page;
