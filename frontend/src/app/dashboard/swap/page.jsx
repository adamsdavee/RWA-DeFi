import SwapToken from "@/components/SwapToken";

const page = () => {
	return (
		<div className="p-5 w-full h-full">
			<h1 className="text-3xl font-bold mb-5 text-center w-full">
				Swap anytime, anywhere...
			</h1>

			<div className="flex m-auto w-full items-center justify-center mt-24">
				<div>
					<SwapToken />
				</div>
			</div>
		</div>
	);
};

export default page;
