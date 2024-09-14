import Image from "next/image";
import { FaBath, FaChair, FaLocationPin } from "react-icons/fa6";

const BigRealEstateCard = ({
	image,
	address,
	type,
	value,
	rentalYield,
	rentalReturn,
	details,
	bathrooms,
	rooms,
}) => {
	return (
		<div className="cursor-pointer rounded-2xl shadow-xl group hover:shadow-2xl duration-500">
			<div className="relative">
				<div className="bg-red-500 text-white rounded-2xl py-0.5 px-2 absolute top-2 -right-3 text-sm z-20">
					{type}
				</div>
				<div className="overflow-hidden rounded-t-2xl">
					<Image
						src={image}
						width={390}
						height={390}
						className="rounded-t-2xl max-w-[390px] group-hover:scale-105 transition-transform duration-500"
					/>
				</div>
				<div className="flex flex-row gap-2 text-white absolute bottom-2 left-2 text-sm font-light">
					<FaLocationPin /> <span>{address}</span>
				</div>
			</div>
			<div className="p-4 flex flex-row justify-between gap-3">
				<div className="flex flex-col items-center justify-center gap-1 flex-1">
					<span className="font-light text-sm text-gray-600">Property Value</span>
					<span className="text-lg font-bold ">{value}</span>
				</div>

				<div className="flex flex-col items-center justify-center gap-1 flex-1">
					<span className="font-light text-sm text-gray-600">Rental Yield</span>
					<span className="text-lg font-bold ">{rentalYield}</span>
				</div>
				<div className="flex flex-col items-center justify-center gap-1 flex-1">
					<span className="font-light text-sm text-gray-600">Ann. Return</span>
					<span className="text-lg font-bold">{rentalReturn}</span>
				</div>
			</div>

			<div className="flex flex-row gap-2 my-2 px-2 justify-between w-full p-4">
				<div className="bg-green-100 rounded-2xl text-green-800 py-1 px-2">
					{details}
				</div>
				<div className="flex flex-row gap-2">
					<div className="flex flex-row items-center gap-2">
						<FaChair className="text-primary" /> {rooms}
					</div>
					<div className="flex flex-row items-center gap-2">
						<FaBath className="text-primary" /> {bathrooms}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BigRealEstateCard;
