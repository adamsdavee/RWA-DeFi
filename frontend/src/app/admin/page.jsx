import React from "react";

const page = () => {
	return (
		<div className="bg-slate-100 min-h-screen">
			<h1 className="text-3xl font-semibold p-5 text-center">Admin</h1>
			<div className="p-4 bg-white rounded-xl shadow-sm w-fit m-3">
				<h3 className="text-lg py-2">Verify Wallet</h3>
				<form action="">
					<div>
						<input
							type="text"
							className="bg-slate-100 rounded-lg p-2"
						/>
					</div>

					<div>
						<button className="bg-primary text-white p-2 rounded-xl  hover:opacity-80 duration-300 my-2 flex ml-auto">
							Verify
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default page;
