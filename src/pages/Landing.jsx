import NavBar from "../components/NavBar";

export default function LandingPage() {
	return (
		<>
			<header className="selection:text-white selection:bg-primary-dark">
				<NavBar />
			</header>
			<main className="mt-50 flex flex-col justify-center items-center text-center selection:text-white selection:bg-primary-dark">
				<h1 className="text-5xl transform transition hover:bg-yellow-200 font-bold mb-6 p-2 rounded">
					Build a ATS Friendly CV under 2 min
				</h1>
				<p className="text-lg text-accent-light mb-6 hover:bg-yellow-200 p-1 rounded transform transition">
					Simple, modern, and optimized for recruiters. No design skills needed.
				</p>
				<a
					href="/new"
					className="px-10 py-5 border-2 rounded opacity-90 bg-accent hover:opacity-100 hover:outline-1"
				>
					Create My CV
				</a>
			</main>
		</>
	);
}
