import ToolBar from "../components/ToolBar";

export default function CreateCV() {
	return (
		<main className="min-h-screen flex flex-col">
			<ToolBar />

			<section className="flex-1 min-h-0 grid grid-cols-2 grid-rows-[auto_1fr] gap-2">
				<p className="border-2 text-center text-2xl flex justify-center items-center">
					Your Details
				</p>
				<p className="border-2 text-center text-2xl flex justify-center items-center">
					Preview
				</p>

				<div className="border-2 p-6 h-full overflow-auto bg-linear-to-r from-red-500 to-red-400">
					<form className="space-y-6">
						<fieldset className="bg-white/70 rounded-lg p-4 ">
							<legend className="px-2 text-lg font-semibold">
								Personal Details
							</legend>

							<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
								{/* Name */}
								<div className="flex items-center gap-3">
									<label
										htmlFor="name"
										className="min-w-24 text-base font-medium"
									>
										Name
									</label>
									<input
										id="name"
										type="text"
										className="w-full bg-gray-100 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
									/>
								</div>

								{/* Email */}
								<div className="flex items-center gap-3">
									<label
										htmlFor="email"
										className="min-w-24 text-base font-medium"
									>
										Email
									</label>
									<input
										id="email"
										type="email"
										className="w-full bg-gray-100 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
									/>
								</div>

								{/* Phone */}
								<div className="flex items-center gap-3">
									<label
										htmlFor="phone"
										className="min-w-24 text-base font-medium"
									>
										Phone
									</label>
									<input
										id="phone"
										type="tel"
										className="w-full bg-gray-100 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
									/>
								</div>

								{/* Address */}
								<div className="flex items-center gap-3 sm:col-span-2">
									<label
										htmlFor="address"
										className="min-w-24 text-base font-medium"
									>
										Address
									</label>
									<input
										id="address"
										type="text"
										className="w-full bg-gray-100 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
									/>
								</div>
							</div>
						</fieldset>

						<fieldset className="bg-white/70 rounded-lg p-4">
							<legend className="px-2 text-lg font-semibold">
								Add Projects
							</legend>
						</fieldset>

						<fieldset className="bg-white/70 rounded-lg p-4">
							<legend className="px-2 text-lg font-semibold">
								Add Experience
							</legend>
						</fieldset>
					</form>
				</div>

				<div className="border-2 p-6 h-full overflow-auto bg-gradient-to-l from-red-500 to-red-400">
					Preview Here{" "}
				</div>
			</section>
		</main>
	);
}
