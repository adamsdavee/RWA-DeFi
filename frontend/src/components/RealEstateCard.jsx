import React from "react";
import Image from "next/image";


const RealEstateCard = () => {

	return (

    // Can convert to dynamic component as needed in the future
		<div className="rounded-xl bg-white shadow-lg flex flex-row gap-3 w-[400px] p-2 m-2">
			<div className="rounded-xl p-2">
				<Image
					src={"/assets/sampleimg.jpg"}
					width={150}
					height={150}
					className="rounded-2xl"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<div className="font-bold text-lg">$150,000</div>
				<div className="font-light text-gray-300 text-sm">
					3374, something road, somewhere
				</div>
				<div className="flex flex-row gap-2">
					<div className="bg-slate-100 rounded-lg p-2">
						<p className="font-light text-gray-300">Total ROI</p>
						<div>8.18%</div>
					</div>
					<div className="bg-slate-100 rounded-lg p-2">
            <p className="font-light text-gray-300">Ann. Return</p>
            <div>8.18%</div>
          </div>
				</div>
			</div>
		</div>
	);
};

export default RealEstateCard;
