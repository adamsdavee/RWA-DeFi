import BigRealEstateCard from "@/components/BigRealEstateCard";
import ChartComponent from "@/components/ChartComponent";
import SwapToken from "@/components/SwapToken";
import { FaArrowsRotate, FaCoins, FaDollarSign } from "react-icons/fa6";

const page = () => {
	return (
		<div className="p-5 m-3">
			<div className="flex flex-row gap-4">
				<div className="flex-1">
					<SwapToken />
				</div>
				<div className=" flex-1 h-full">
					<ChartComponent />
				</div>
			</div>

			{/* Financial details cards */}
			<div className="flex flex-row gap-4 flex-wrap my-10">
				<div className="bg-white rounded-xl p-4 py-5 w-[200px] flex flex-col gap-2">
					<div className="text-sm font-light text-gray-600">
						My RWA Balance
					</div>
					<div className="flex flex-row items-center gap-3 text-xl font-semibold">
						<FaCoins className="text-primary" /> 0
					</div>
				</div>

				<div className="bg-white rounded-xl p-4 py-5 w-[200px] flex flex-col gap-2">
					<div className="text-sm font-light text-gray-600">
						Rental Yield
					</div>
					<div className="flex flex-row items-center gap-3 text-xl font-semibold">
						<FaDollarSign className="text-primary" /> 6.383%
					</div>
				</div>

				<div className="bg-white rounded-xl p-4 py-5 w-[200px] flex flex-col gap-2">
					<div className="text-sm font-light text-gray-600">
						Ann. Return
					</div>
					<div className="flex flex-row items-center gap-3 text-xl font-semibold">
						<FaArrowsRotate className="text-primary" /> 8.856%
					</div>
				</div>
			</div>

			{/* Financial summary */}
			<div className="max-w-[700px] rounded-xl bg-white p-5 my-5">
				<h2 className="font-bold text-2xl mb-8">Financial Summary</h2>
				<div className="flex flex-col gap-5">
					<div className="flex flex-row gap-4 justify-between">
						<span className="font-semibold">
							Gross Rent per Year
						</span>
						<span className="text-gray-500">$45,000</span>
					</div>

					<div className="flex flex-row gap-4 justify-between">
						<span className="font-semibold">
							Gross Rent per Month
						</span>
						<span className="text-gray-500">$3,750</span>
					</div>

					<div className="flex flex-row gap-4 justify-between">
						<span className="font-semibold">Annual Expenses</span>
						<span className="text-gray-500">-$13,261.69</span>
					</div>
					<div className="flex flex-row gap-4 justify-between">
						<span className="font-semibold">
							Total Property Value
						</span>
						<span className="text-gray-500">$464,671</span>
					</div>

					<div className="flex flex-row gap-4 justify-between">
						<span className="font-semibold">Cash Assets</span>
						<span className="text-gray-500">$32,563.43</span>
					</div>

					<div className="flex flex-row gap-4 justify-between">
						<span className="font-semibold">
							Net Rent Per Month
						</span>
						<span className="text-gray-500">$2,644.86</span>
					</div>

					<div className="flex flex-row gap-4 justify-between">
						<span className="font-semibold">Net Rent per Year</span>
						<span className="text-gray-500">$31,738.31</span>
					</div>

					<div className="flex flex-row gap-4 justify-between">
						<span className="font-semibold">Token Price</span>
						<span className="text-gray-500">$1.1027</span>
					</div>

					<div className="flex flex-row gap-4 justify-between">
						<span className="font-semibold">Total Tokens</span>
						<span className="text-gray-500">450,915</span>
					</div>
				</div>
			</div>

			<section className="bg-white my-10 py-10">
				{/* Current assets header */}
				<div>
					<h1 className="text-4xl font-extrabold text-center  my-14">
						Our Current Assets
					</h1>
				</div>

				<div className="flex flex-row flex-wrap md:gap-8 gap-4 justify-evenly p-5">
					<BigRealEstateCard
						image={"/assets/sample_img2.jpg"}
						details={"Single Family"}
						value={"$25,125,000"}
						rentalYield={"9.32%"}
						rentalReturn={"12.22%"}
						bathrooms={1}
						rooms={2}
						address={"333 Oau road, Road 9, Ile-Ife"}
						type={"Rental Property"}
					/>

					<BigRealEstateCard
						image={"/assets/sample_img2.jpg"}
						details={"Single Family"}
						value={"$25,125,000"}
						rentalYield={"9.32%"}
						rentalReturn={"12.22%"}
						bathrooms={1}
						rooms={2}
						address={"333 Oau road, Road 9, Ile-Ife"}
						type={"Rental Property"}
					/>

					<BigRealEstateCard
						image={"/assets/sample_img2.jpg"}
						details={"Single Family"}
						value={"$25,125,000"}
						rentalYield={"9.32%"}
						rentalReturn={"12.22%"}
						bathrooms={1}
						rooms={2}
						address={"333 Oau road, Road 9, Ile-Ife"}
						type={"Rental Property"}
					/>
				</div>
			</section>
		</div>
	);
};

export default page;
